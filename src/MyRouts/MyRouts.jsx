import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import CreateProfile from "../Pages/CreateProfile/CreateProfile";

export const MyRouts = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: '/login',
          element: <div></div>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/createProfile',
          element: <CreateProfile/>
        }
      ]
    },
  ]);