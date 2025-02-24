import { useEffect, useMemo } from 'react';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/api';
import { PokemonSearchResponse, SearchParams } from '@/models';

export function useSearchApi({ searchTerm, params = {} }: SearchParams) {
  const urlParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) urlParams.set(key, value.toString());
  });

  // Query function used to fetch data
  const queryFn = async ({ pageParam }: QueryFunctionContext) => {
    const page = pageParam as string;
    if (page) urlParams.set('page', page);

    return pokemonApi.search(searchTerm, urlParams)();
  };

  // Infinite query is configured to handle pagination, retries, and refetching
  const { data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['pokemon', searchTerm, urlParams.toString()],
      queryFn,
      initialPageParam: undefined,
      getNextPageParam: (lastPage: PokemonSearchResponse) => lastPage.nextPage,
      enabled: Boolean(searchTerm),
      retry: 3,
      refetchOnWindowFocus: false,
    });

  // on state change get next page
  useEffect(() => {
    if (!hasNextPage || isFetching) return;
    fetchNextPage();
  }, [hasNextPage, isFetching, fetchNextPage]);

  // Flatten all pages into a single array
  const flattenedData = useMemo(
    () => data?.pages.flatMap((page) => page.pokemon) ?? [],
    [data],
  );

  return {
    data: flattenedData,
    isFetching: isFetching,
    error: error,
  };
}
