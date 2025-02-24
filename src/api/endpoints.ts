export const ENDPOINTS = {
  search: (search: string) => `/pokemon/search/${search}`,
  pokemon: (id: string) => `/pokemon/${id}`,
} as const;

