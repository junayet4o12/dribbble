import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Pages/Register/Register";

export const MyRouts = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: '/login',
          element: <Register/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    },
  ]);