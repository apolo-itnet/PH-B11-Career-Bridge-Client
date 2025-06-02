import React, { use, useState } from "react";

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
  const [isFieldClick, setIsFieldClick] = useState(false);

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

                {/* Name Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Full Name"}
                    placeholder={"Enter your full name"}
                    icon={UserRoundPen}
                  />
                </div>

                {/* Profile Photo Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Profile Photo"}
                    placeholder={"https:// URL..."}
                    icon={ImageIcon}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Email"}
                    placeholder={"Enter your email address"}
                    icon={Mail}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Password"}
                    placeholder={"Enter your Password"}
                    icon={Key}
                  />
                </div>
                {/* Password Field */}
                <div>
                  <CustomInput
                    type="text"
                    label={"Confirm Password"}
                    placeholder={"Enter your Confirm Password"}
                    icon={Key}
                  />
                </div>
                {/* Number Field */}
                <div>
                  <CustomInput
                    type="number"
                    label={"Phone Number"}
                    placeholder={"Enter your Phone Number"}
                    icon={Phone}
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

          {/* Lottie Animation */}
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
