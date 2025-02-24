import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
          <h1>Page Not Found</h1>
          <p>Sorry, we couldn't find the page you're looking for.</p>
          <Link to="/">
            Return Home
          </Link>
        </div>
      );
    }
  }

  return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">
          Return Home
        </Link>
      </div>
  );
}
