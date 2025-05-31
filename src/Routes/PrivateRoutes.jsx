import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px-273px)] flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
