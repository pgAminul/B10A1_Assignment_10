import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Error from "../Pages/Error";
import MainHome from "../Layout/MainHome";
import LoginPage from "../Layout/Login";
import RegisterPage from "../Layout/Register";
import AddProducts from "../Pages/AddProduct";
import PrivetRouter from "./PrivetRouter";
import AllProducts from "../Pages/AllProducts";
import MyProducts from "../Pages/MyProducts";
import DetailsHomeCard from "../Pages/DetailsHomeCard";
import AllCardDetails from "../Pages/AllCardDetails";
import UpdateProduct from "../Pages/UpdateData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/addEquipment",
        element: (
          <PrivetRouter>
            <AddProducts />
          </PrivetRouter>
        ),
      },
      {
        path: "/sportsEquipment",
        element: <AllProducts />,
      },
      {
        path: "/myEquipment",
        element: (
          <PrivetRouter>
            <MyProducts />
          </PrivetRouter>
        ),
      },
      {
        path: "/Details-card-home/:id",
        element: (
          <PrivetRouter>
            <DetailsHomeCard />
          </PrivetRouter>
        ),
      },
      {
        path: "all-porduct-details/:id",
        element: (
          <PrivetRouter>
            <AllCardDetails />
          </PrivetRouter>
        ),
      },
      {
        path: "/update-product-details/:id",
        element: (
          <PrivetRouter>
            <UpdateProduct />
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default router;
