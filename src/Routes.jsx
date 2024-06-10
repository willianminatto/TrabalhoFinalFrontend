import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";

export const RoutesApp = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
