import { useSearchContext } from "../context";

export const Statuses = () => {
  const { error, isFetching } = useSearchContext();

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {isFetching && <div>Loading...</div>}
    </>
  );
};
