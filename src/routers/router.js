import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/Layouts/MainLayouts";
import Home from "../Components/Pages/Home/Home";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
export default routers;