import React, { use, useState } from "react";
import loginLottie from "../../assets/lottie-animation/login-lottie.json";

import registerLottie from "../../assets/lottie-animation/register-lottie.json";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";
import { showSweetNotify, showToastError } from "../../Utility/notification";
import SocialLogin from "../../Shared/SocialLogin";
import { useNavigate } from "react-router";
import { UserRoundPen, ImageIcon, Mail, Key, Phone } from "lucide-react";
import CustomInput from "../../Shared/CustomInput";

const Register = () => {
  // Function to handle form submission
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { fullName, email, password, photoURL, phone } =
      form;
    const photo = photoURL.value || "https://i.postimg.cc/WpBxFRrR/user-5.png";

    try {
      // Firebase user create
      const { user } = await createUser(email.value, password.value);
      await updateProfile(user, {
        displayName: fullName.value,
        photoURL: photo,
      });

      // MongoDB তে user info পাঠানো
      const userInfo = {
        name: fullName.value,
        email: email.value,
        phone: phone.value,
        photoURL: photo,
        role: "candidate", 
        createdAt: new Date(),
      };

      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const result = await res.json();
      if (result.insertedId) {
        showSweetNotify("Registration successful!");
        form.reset();
        navigate("/");
      } else {
        showToastError("MongoDB Save failed.");
      }
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
        className="w-full bg-base-100 max-w-3xl mx-auto my-10"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex-1 p-8 w-full border border-base-300 shadow-xs rounded-2xl">
            <form onSubmit={handleRegister} className="form-control">
              <fieldset className="fieldset mx-auto items-center space-y-2">
                <div>
                  <p className="text-4xl font-bold text-center py-2 ">
                    Let's Get Start
                  </p>
                  <p className="text-sm text-center">
                    <span className="font-bold text-blue-500">Register</span>{" "}
                    now and get access to all the features.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Full Name"}
                    name={"fullName"}
                    placeholder={"Enter your full name"}
                    icon={UserRoundPen}
                  />
                </div>

                {/* Email & Number Field */}
                <div className="flex justify-between items-center gap-2">
                  <div className="w-full">
                    <CustomInput
                      type="text"
                      label={"Email"}
                      name={"email"}
                      placeholder={"Enter your email address"}
                      icon={Mail}
                    />
                  </div>
                  {/* Number Field */}
                  <div className="w-full">
                    <CustomInput
                      type="number"
                      label={"Phone Number"}
                      name={"phone"}
                      placeholder={"Enter your Phone Number"}
                      icon={Phone}
                    />
                  </div>
                </div>

                {/* Password & Confirm Password  Field */}
                <div className="flex justify-between items-center gap-2">
                  <div className="w-full">
                    <CustomInput
                      type="password"
                      label={"Password"}
                      name={"password"}
                      placeholder={"Enter your Password"}
                      icon={Key}
                    />
                  </div>
                  {/* Confirm Password Field */}
                  <div className="w-full">
                    <CustomInput
                      type="password"
                      label={"Confirm Password"}
                      name={"confirmPassword"}
                      placeholder={"Enter your Confirm Password"}
                      icon={Key}
                    />
                  </div>
                </div>

                {/* Profile Photo Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Profile Photo"}
                    name={"photoURL"}
                    placeholder={"https:// URL..."}
                    icon={ImageIcon}
                  />
                </div>

                <div>
                  <a className="link link-hover text-blue-500 font-semibold">
                    Forgot password?
                  </a>
                </div>
                <div>
                  <p className="flex gap-2 font-medium text-base text-gray-600">
                    {" "}
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="checkbox"
                    />{" "}
                    <span>is Employer?</span>
                  </p>
                </div>
                <button className="btn btn-primary mt-4">Register</button>
              </fieldset>
            </form>
            <SocialLogin />
          </div>
        </div>
        {/* Lottie Animation */}
        {/* <div className="absolute -right-44 top-30 opacity-50">
          <Lottie
            style={{ width: "200px" }}
            animationData={registerLottie}
            loop={true}
            speed={0.2}
          />
        </div> */}
      </div>
      <div className="py-4 responsive-padding flex justify-between">
        <img src={"https://i.postimg.cc/9Fw7pryz/img-2.png"} alt="" />
        <Lottie
          style={{ width: "300px" }}
          animationData={loginLottie}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Register;
