import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { showSweetNotify, showToastError } from "../Utility/notification";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  //logout function
  const handleLogout = () => {
    logOut()
      .then(() => {
        showSweetNotify("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        showToastError(`Logout Failed: ${error.message}`);
      });
  };

  const links = (
    <>
      <ul className="text-base-content font-semibold flex items-center gap-8">
        <NavLink>Home</NavLink>

        {/* for candidate roles */}
        {user && (
          <>
            <NavLink to={"/my-application"}>My Application</NavLink>
          </>
        )}

        {/* for employer roles */}
        {user && (
          <>
            <NavLink to={"/add-job"}>Add Job</NavLink>
            <NavLink to={"/my-posted-job"}>My Posted Jobs</NavLink>
          </>
        )}

      </ul>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border border-base-300 w-full responsive-padding">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl font-bold btn bg-base-100 text-base-content border-none "
          >
            Jobs Bridge
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2 relative group max-w-full">
                <img
                  src={
                    user.photoURL || "https://i.postimg.cc/C5kPH183/user-2.png"
                  }
                  alt="User Avatar"
                  className="w-12 h-12 border border-base-300 p-1 rounded-full object-cover cursor-pointer "
                />
                <div className="absolute -left-20 top-full mt-2 p-2 border border-base-300 text-sm shadow-lg rounded-lg opacity-0  group-hover:opacity-100 transition-opacity duration-300 bg-base-100 z-50 min-w-[150px] text-center break-words pointer-events-none">
                  <span className="text-sm font-semibold">
                    {user.displayName || "User Name"}
                  </span>{" "}
                  <br />
                  <span className="text-sm font-semibold">{user.email}</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn text-base-100 rounded-lg border border-transparent bg-blue-600  hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to="/login" className="w-24 btn btn-primary">
                Login
              </NavLink>
              <NavLink to="/register" className="w-24 btn btn-secondary">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
