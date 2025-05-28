import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/JobDetails/JobDetails';


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
      },
      {
        path: '/jobs/:id',
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
        hydrateFallbackElement: <span>Loading...</span>
      }
    ],
  },
]);

export default Router;