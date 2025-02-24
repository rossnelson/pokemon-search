import { SearchContext, useSearch } from "../context";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const context = useSearch();
  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};
