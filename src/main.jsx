import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Update from "./page/Update.jsx";
import Cart from "./page/Cart.jsx";
import Favourites from "./page/Favourites.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
import ThemeContextProvider from "./Context/ThemeContextProvider.jsx";
import EstateDetails from "./page/EstateDetails.jsx";
import CartContextProvider from "./Context/CartContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/estate/:id",
        element: <EstateDetails />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/update_profile",
        element: <Update />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </ThemeContextProvider>,
);
