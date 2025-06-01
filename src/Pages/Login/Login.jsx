import Lottie from "lottie-react";
import React, { use } from "react";

import loginLottie from "../../assets/lottie-animation/login-lottie.json";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { showSweetNotify, showToastError } from "../../Utility/notification";
import { useLocation, useNavigate } from "react-router";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  // console.log("location in sign in page", location);


  // Function login handler
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //Login functionality can be implemented here
    logIn(email, password)
      .then((result) => {
        console.log("Login successful:", result);
        // Redirect or show success message
        showSweetNotify("Login successful!");
        form.reset();
        // Optionally, you can redirect the user to another page
        navigate(from); // Assuming you have a navigate function from react-router
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Show error message to the user
        showToastError(`Login failed: ${error.message}`);
      });
  };

  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="bg-base-100 max-w-4xl mx-auto my-10"
      >
        <div className="flex items-center justify-center gap-8">
          <div className="flex-1 p-8 max-w-xl border border-base-300 shadow-xs rounded-2xl">
            <form onSubmit={handleLogin} className="form-control">
              <fieldset className="fieldset mx-auto items-center">
                <h1 className="text-3xl font-bold text-center">Login Now!</h1>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-300"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-300"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-primary mt-4 shadow-none text-base-100">
                  Login
                </button>
              </fieldset>
            </form>
            <SocialLogin from={from} />
          </div>
          <div>
            <Lottie size={300} animationData={loginLottie} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
