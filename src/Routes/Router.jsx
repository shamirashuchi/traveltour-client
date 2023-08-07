import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Start from "../Pages/Start";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Postdata from "../Pages/Postdata";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Start></Start>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:"/add_item",
          element:<Postdata></Postdata>
        }
      ]
    },
  ]);