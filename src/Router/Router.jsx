import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // This is the default route that will be rendered when the path is "/"
        Component: Home
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login,
      }
    ],
  },
]);

export default Router;