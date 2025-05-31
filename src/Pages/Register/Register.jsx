import React, { use } from "react";

import registerLottie from "../../assets/lottie-animation/register-lottie.json";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";
import { showSweetNotify, showToastError } from "../../Utility/notification";
import SocialLogin from "../../Shared/SocialLogin";
import { useNavigate } from "react-router";

const Register = () => {
  // Function to handle form submission
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { firstName, lastName, email, password, photoURL } = form;
    const fullName = `${firstName.value} ${lastName.value}`;
    const photo = photoURL.value || "https://i.postimg.cc/WpBxFRrR/user-5.png";

    try {
      const { user } = await createUser(email.value, password.value);
      await updateProfile(user, { displayName: fullName, photoURL: photo });

      showSweetNotify("Registration successful!");
      form.reset();
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      showToastError(`Registration failed: ${err.message}`);
    }
  };

  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="bg-base-100 max-w-4xl mx-auto my-10"
      >
        <div className="flex items-center justify-center gap-8">
          <div className="flex-1 p-8 max-w-2xl border border-base-300 shadow-xs rounded-2xl">
            <form onSubmit={handleRegister} className="form-control">
              <fieldset className="fieldset mx-auto items-center">
                <h1 className="text-3xl font-bold text-center">
                  Register Now!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="input w-full"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="input w-full"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="label">Profile Photo</label>
                  <input
                    name="photoURL"
                    type="text"
                    className="input w-full"
                    placeholder="Profile Photo URL"
                    required
                  />
                </div>
                <div>
                  <label className="label">Phone Number</label>
                  <input
                    name="phoneNumber"
                    type="number"
                    className="input w-full"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <SocialLogin />
          </div>
          <div>
            <Lottie
              style={{ width: "300px" }}
              animationData={registerLottie}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
