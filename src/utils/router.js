import { Crew } from "pages/Crew";
import { Destination } from "pages/Destination";
import { Home } from "pages/Home";
import { Technology } from "pages/Technology";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/destination",
    element: <Destination />,
  },
  { path: "/crew", element: <Crew /> },
  { path: "/tech", element: <Technology /> },
]);
