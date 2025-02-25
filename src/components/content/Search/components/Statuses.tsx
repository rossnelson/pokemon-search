import { useSearchContext } from "../context";

export const Statuses = () => {
  const { data, query, error, isFetching } = useSearchContext();

  if (error?.status === 404) return <div>Not Found</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      {query.length == 0 && <div>Search for something...</div>}
      {query.length > 0 && data.length == 0 && <div>No Results...</div>}
    </>
  );
};
