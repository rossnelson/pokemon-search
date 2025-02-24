import { fetchWithError } from './client';
import { ENDPOINTS } from './endpoints';
import type { Pokemon, PokemonSearchResponse } from '@/models/pokemon';

export const pokemonApi = {
  search: (term: string, params: URLSearchParams) => () => {
    const url = `${ENDPOINTS.search(term)}?${params.toString()}`;
    return fetchWithError(url) as Promise<PokemonSearchResponse>;
  },

  get: (id: string) => {
    if (!id) return Promise.reject(new Error('Invalid id'));

    const url = ENDPOINTS.pokemon(id);
    return fetchWithError(url) as Promise<Pokemon>;
  },
};
