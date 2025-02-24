# Testing Strategy

I wanted to outline my approach to testing this app. While I didn't implement tests due to the 2-hour time constraint, here's how I would structure the test suite using Jest and React Testing Library.

## Test Structure

```bash
// Example folder structure
src/
  components/
    content/
      Search/
        Search.test.tsx
        components/
          List.test.tsx
  hooks/
    useSearchApi.test.tsx
  api/
    pokemon.test.ts
```

## Key Areas to Test

### Component Tests

```typescript
// PokemonSearch.test.tsx
describe('PokemonSearch', () => {
  it('renders search input and handles user typing', async () => {
    render(<PokemonSearch />)
    const input = screen.getByRole('searchbox')
    await userEvent.type(input, 'bulba')
    // Assert input value updated
  })

  it('shows loading state while fetching', async () => {
    // Mock React Query's useQuery to return isLoading: true
    // Assert loading indicator is visible
  })

  it('displays error message on API failure', async () => {
    // Mock React Query's useQuery to return error state
    // Assert error message is shown
  })

  it('renders Pokemon list with results', async () => {
    // Mock successful API response
    // Assert results are displayed
  })

  it('shows empty state message when no results found', async () => {
    // Mock empty results
    // Assert empty state message
  })
})
```

### Hook Tests

```typescript
// useSearchApi.test.tsx
describe("useSearchApi", () => {
  it("handles pagination correctly", async () => {
    const { result } = renderHook(() => usePokemonSearch());
    // Test nextPage token handling
  });

  it("handles race conditions with multiple requests", async () => {
    // Test that only latest results are used
  });

  it("retries failed requests", async () => {
    // Mock API failures and verify retry behavior
  });
});
```

## Mocking Strategy

```typescript
// Test utils
const mockPokemonResponse = {
  pokemon: [{ id: 1, name: "Bulbasaur" }],
  nextPage: "MQ==",
};

// Mock API responses
jest.mock("../api", () => ({
  searchPokemon: jest.fn(),
}));

// Helper to simulate chaos mode
const setupChaosTest = () => {
  searchPokemon.mockImplementation(() => {
    if (Math.random() < 0.2) {
      throw new Error("Chaos mode error");
    }
    return mockPokemonResponse;
  });
};
```

## What I Wouldn't Test

- React Query's internal functionality
- Basic React component rendering
- Implementation details (internal state)
- External library functionality
