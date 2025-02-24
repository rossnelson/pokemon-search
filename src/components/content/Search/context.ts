import { useSearchApi } from "@/hooks";
import { createContext, useContext, useState } from "react";

type SearchContextType = {
  // search
  query: string;
  setQuery: (query: string) => void;

  // modifiers
  setChaos: (chaos: boolean) => void;
  setFlakiness: (flakiness: number) => void;
  setDelay: (delay: number) => void;

  // results
  data: any;
  isFetching: boolean;
  error: any;
};

export const SearchContext = createContext({} as SearchContextType);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContext");
  }

  return context;
};

export const useSearch = () => {
  const [chaos, setChaos] = useState<boolean>(false);
  const [flakiness, setFlakiness] = useState<number>(0);
  const [delay, setDelay] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const { data, isFetching, error } = useSearchApi({
    searchTerm: query,
    params: { chaos, flakiness, delay },
  });

  return {
    setChaos,
    setFlakiness,
    setDelay,
    query,
    setQuery,
    data,
    isFetching,
    error,
  };
};
