# Why React Query?

For this Pokemon search implementation, I chose to use React Query (TanStack Query) instead of implementing custom request handling logic. Here's why:

## Built-in Request Management

The challenge requirements specifically called for handling several complex API scenarios:

- Race conditions from out-of-order responses
- Random API failures requiring retry logic
- Loading and error states
- Pagination handling

React Query provides battle-tested solutions for all these requirements out of the box:

- **Automatic Retries**: React Query handles retry logic with exponential backoff, perfect for handling the API's chaos mode (`flakiness=1`) without writing custom retry implementations.

- **Race Condition Prevention**: The library automatically manages request deduplication and ensures only the latest query results are displayed, addressing the requirement to "render only the most recent request's response."

- **Built-in State Management**: React Query provides ready-to-use loading, error, and success states, matching the UI state requirements exactly:

  - `isFetching` for subsequent loading states
  - `isError` for error states
  - `data` for successful fetches

- **Pagination Support**: The library's infinite query features made implementing the `nextPage` token functionality straightforward.

## Developer Experience & Maintainability

While we could implement custom solutions for these requirements, using React Query offers several advantages:

1. **Reduced Complexity**: The alternative would require maintaining complex state machines for loading/error states and writing custom debouncing/cancellation logic.

2. **Battle-Tested Code**: React Query's solutions for race conditions and retry logic are well-tested across many production applications.

3. **Future Extension**: The library provides a foundation for future features like:

   - Request caching
   - Prefetching
   - Optimistic updates
   - Infinite scroll

4. **Performance Optimization**: React Query includes built-in request deduplication and cache management, improving application performance without additional code.

Given the two-hour time constraint of this challenge, using React Query allowed focusing on implementing the core search functionality while providing robust handling of edge cases.
