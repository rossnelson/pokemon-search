import { Input } from "@/components/ui/input";
import { useSearchContext } from "../context";

export const SearchInput = () => {
  const { query, setQuery } = useSearchContext();

  return (
    <>
      <label htmlFor="search">Search</label>

      <Input
        id="search"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};
