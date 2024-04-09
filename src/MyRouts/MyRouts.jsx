import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import CreateProfileMain from "../Pages/CreateProfile/CreateProfileMain";
import PrivateRouts from "../PrivateRouts/PrivateRouts";
import Home from "../Pages/Home/Home";
import VerifyEmailAddress from "../Pages/VerifyEmailAddress/VerifyEmailAddress";

export const MyRouts = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PrivateRouts><Home></Home></PrivateRouts>
      },
      {
        path:'/verifyEmail',
        element:<PrivateRouts><VerifyEmailAddress/></PrivateRouts>
      }
      
    ]
  },
  {
    path: '/login',
    element: <div></div>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/createProfile',
    element: <PrivateRouts><CreateProfileMain /></PrivateRouts>
  }
]);