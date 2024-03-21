import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

import LayOut from "../LayOut";
import Signup from "../Register/Signup";
import Login from "../Register/Login";
import ErrorPage from "../ErrorPage.jsx/ErrorPage";
import Daseboard from "../Daseboard/Daseboard";
import UserHome from "../Daseboard/UserDaseboard/UserHome";
import AddDomain from "../Daseboard/UserDaseboard/AddDomain";
import Domain from "../Daseboard/UserDaseboard/Domain";
import Update from "../Daseboard/UserDaseboard/Update";
import PrivateRipo from "../PrivateRipo/PrivateRipo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/daseboard",
    element:<PrivateRipo> <Daseboard></Daseboard></PrivateRipo>,
    children: [
      {
      path:"home",
      element:<UserHome></UserHome>
    },
    {
      path:'adddomain',
      element:<PrivateRipo><AddDomain></AddDomain></PrivateRipo>
    },
    {
      path:'domain',
      element:<PrivateRipo><Domain></Domain></PrivateRipo>
    },
    {
      path:'update/:id',
      element:<PrivateRipo><Update></Update></PrivateRipo>
    },
  ],
  },
]);

export default router;
