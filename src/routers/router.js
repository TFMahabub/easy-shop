import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/Layouts/MainLayouts";
import GloceryDetails from "../Components/Pages/Home/GloceryProduct/SeeMoreGlocery/GloceryDetails";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/LogIn/Login";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/products/product_details/:id',
        element: <GloceryDetails />
      }
    ]
  }
])
export default routers;