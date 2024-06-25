import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Service } from "./pages/Service";
import { Product } from "./pages/Products";
import { Customer } from "./pages/Customer";

export const RoutesApp = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/service",
    element: (
      <>
        <Header />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <Header />
        <Product />
        <Footer />
      </>
    ),
  },
  {
    path: "/customer",
    element: (
      <>
        <Header />
        <Customer />
        <Footer />
      </>
    ),
  },
]);
