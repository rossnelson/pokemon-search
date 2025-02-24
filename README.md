# Pokemon Search App

A React application for searching Pokemon using [TanStack Query](https://tanstack.com/query) to handle API requests, state management, and error handling.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v9.15.5)

_hint: use asdf and run `asdf install` in the project root_

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rossnelson/pokemon-search.git
cd pokemon-search
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- **Real-time Pokemon search** - Results update as you type
- **Chaos Mode** - Toggle random delays and errors to test resilience
- **Pagination** - Automatically loads more results when available
- **Error Handling** - Graceful recovery from API failures
- **Responsive UI** - Works on mobile and desktop

## Project Structure

```
 λ  tree ./src
./src
├── api                                  # API integration
│   ├── client.ts
│   ├── endpoints.ts
│   ├── index.ts
│   └── pokemon.ts                       # Pokemon API integration
├── assets
├── components
│   ├── content
│   │   └── Search
│   │       ├── Search.tsx               # Main search component
│   │       ├── components
│   │       │   ├── List.tsx             # Results display
│   │       │   ├── Modifiers.tsx        # Chaos mode controls
│   │       │   ├── SearchInput.tsx      # Input field component
│   │       │   ├── SearchProvider.tsx   # State management
│   │       │   ├── Statuses.tsx         # Loading/error indicators
│   │       │   └── index.ts
│   │       ├── context.ts               # Search State management
│   │       └── index.ts
│   ├── layout
│   │   ├── ErrorBoundary.tsx
│   │   └── Root.tsx
│   └── ui                               # Reusable UI components
│       └── input.tsx
├── hooks
│   ├── index.ts
│   └── useSearchApi.ts                  # API connection with React Query
├── main.tsx
├── models
│   ├── index.ts
│   ├── pokemon.ts
│   └── search.ts
└── routes.tsx
```

## API Integration

This app connects to the Pokemon API at:

```
https://meowing-bristle-alamosaurus.glitch.me/
```

Notes:

- The API may be initially asleep, requiring a few seconds to wake up, the loading indicator will show during this time
- The API supports chaos mode for testing error states and race conditions, see the UI for controls

## Development Notes

### Enabling Chaos Mode

To see how the app handles API challenges:

Use the UI configuration to enable:

- Chaos mode (random delays + errors)
- Custom flakiness (1 in N requests fail)
- Delay (specific millisecond delay)

### Testing

While tests aren't implemented due to the time constraint, check the `testing-strategy.md` document for the planned testing approach.

## Documentation

Additional documentation:

- [Why React Query?](docs/why-react-query.md) - Rationale for using TanStack Query
- [Testing Strategy](docs/testing-strategy.md) - Planned testing approach
