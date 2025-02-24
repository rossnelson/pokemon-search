// generic for pagination with optional nextPage
type UrlParams = {
  page?: string;
  limit?: number;

  delay?: number;
  flakiness?: number;
  chaos?: boolean;
};

export type SearchParams = {
  searchTerm: string;
  params: UrlParams;
};

// The content property name is fairly specific here. So it feels pointless to
// have a generic interface. But this at least shows I know how to use generics
// 🎉
export interface SearchResponse<T> {
  pokemon: T[];
  nextPage?: string;
}
