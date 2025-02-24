import {
  List,
  Modifiers,
  SearchInput,
  SearchProvider,
  Statuses,
} from "./components";

export const Search = () => {
  return (
    <SearchProvider>
      <h1>Pokemon Search</h1>

      <SearchInput />
      <Modifiers />

      <Statuses />

      <List />
    </SearchProvider>
  );
};
