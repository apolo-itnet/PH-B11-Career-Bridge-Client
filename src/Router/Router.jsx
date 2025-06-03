import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoutes from "../Routes/PrivateRoutes";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // This is the default route that will be rendered when the path is "/"
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
        hydrateFallbackElement: <span>Loading...</span>,
      },
      {
        path: "/jobApply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-application",
        element: (
          <PrivateRoutes>
            <MyApplication></MyApplication>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-posted-job",
        element: (
          <PrivateRoutes>
            <MyPostedJobs/>
          </PrivateRoutes>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoutes>
            <ViewApplications/>
          </PrivateRoutes>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      },
    ],
  },
]);

export default Router;
