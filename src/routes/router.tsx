import { createBrowserRouter } from "react-router-dom";
import Slider from "../components/slider";
import Main from "../layouts/main";
import Booking from "../pages/booking";
import Home from "../pages/home";
import Login from "../pages/login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Slider />,
          },
          {
            path: "/booking/:id",
            element: <Booking />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
