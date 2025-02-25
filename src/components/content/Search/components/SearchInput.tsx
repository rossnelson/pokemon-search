import { Input } from "@/components/ui/input";
import { useSearchContext } from "../context";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchInput = () => {
  const { query, setQuery } = useSearchContext();

  const [value, setValue] = useState(query);
  const debounceValue = useDebounce(value);

  useEffect(() => {
    setQuery(debounceValue);
  }, [debounceValue, setQuery]);

  return (
    <>
      <label htmlFor="search">Search</label>

      <Input
        id="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
