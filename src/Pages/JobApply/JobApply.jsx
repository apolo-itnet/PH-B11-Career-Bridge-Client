import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { showSweetNotify } from "../../Utility/notification";
import { getAuth } from "firebase/auth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const { title } = useLoaderData();

 

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const firstName = form.firstName.value;
    // const lastName = form.lastName.value;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const resumeUpload = form.resumeUpload.value;
    const profileURL = form.profileURL.value;

    const jobApplication = {
      jobId,
      fullName,
      candidate: email,
      phone,
      message,
      resumeUpload,
      profileURL,
    };
    axios
      .post("http://localhost:3000/applications", jobApplication)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          showSweetNotify("Your Application has been Submited!");
        }
        // form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full py-10">
        <div className="w-full max-w-3xl rounded-2xl p-8  border border-base-300">
          <div className="mb-6 text-center">
            <h1 className="text-sm font-semibold bg-blue-400/40 p-2 px-4 text-center inline-block rounded-lg text-blue-600">
              Job Application
            </h1>
            <h2 className="text-4xl font-bold py-3 ">
              Start Your Career Today
            </h2>
            <p className="text-sm font-semibold text-gray-500">
              Please fill in your information and send it to the employer.
            </p>
            <h3 name="title" className="text-xl font-bold text-blue-500 mt-2">
              {title}
            </h3>
          </div>

          <form className="space-y-4" onSubmit={handleApplyFormSubmit}>

            <div className="flex flex-col">
              <label className=" text-sm font-medium flex ">Full Name</label>
              <div className="flex mt-1">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your first name"
                  defaultValue={user?.displayName}
                  required
                  readOnly
                  className="input w-full rounded-l-lg rounded-r-none focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500 cursor-not-allowed"
                />
{/* 
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  className="input w-full rounded-r-lg rounded-l-none focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500"
                /> */}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium ">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                required
                readOnly
                placeholder="Example: stevenjob@gmail.com"
                className="input w-full rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium ">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(+880) 1811 112233"
                required
                className="input w-full rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="3"
                defaultValue={"I'm in expert on"}
                className="mt-1 input h-full w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium ">Profile Link</label>
              <input
                type="url"
                name="profileURL"
                placeholder="Paste your profile link Linkedin/Github"
                required
                className="mt-1 input w-full rounded-l-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium ">
                Resume Upload
              </label>
              <input
                type="file"
                name="resumeUpload"
                disabled
                className="mt-1 input h-full w-full rounded-lg px-4 py-2 focus:outline-none file:rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:cursor-not-allowed file:disabled hover:file:bg-blue-100 focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500 cursor-not-allowed transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium ">
                Cover Letter Upload
              </label>
              <input
                type="file"
                name="coverLetter"
                disabled
                className="mt-1 input h-full w-full rounded-lg px-4 py-2 focus:outline-none file:rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:cursor-not-allowed file:disabled hover:file:bg-blue-100 focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden focus:duration-500 cursor-not-allowed transition-all duration-300"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn btn-primary w-full bg-blue-600 text-white font-semibold py-5 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
