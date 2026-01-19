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
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import AuthContextProvider from "./Authentication/AuthContextProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

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
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </AuthContextProvider>
  </ThemeContextProvider>,
);
