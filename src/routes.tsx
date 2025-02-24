import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/components/layout/Root";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { Search } from "./components/content/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Search />,
      },
    ],
  },
]);
