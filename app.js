import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import WatchList from "./src/components/WatchList";
import Movies from "./src/components/Movies";
import Orignal from "./src/components/Orignal";
import Series from "./src/components/Series";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector(".root"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/Watchlist", element: <WatchList /> },
      { path: "/Orignal", element: <Orignal /> },
      { path: "/Series", element: <Series /> },
      { path: "/movies", element: <Movies /> },
    ],
  },
]);
root.render(<RouterProvider router={appRoute} />);
