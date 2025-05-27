import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div>
      {/* Hero */}
      <div className="w-full mx-auto  h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200 text-base-content">
        <div className="flex justify-between items-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-2/3">
            <motion.h1 className="block text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
              The{" "}
              <motion.span
                animate={{ color: ["rotate(0deg)", "rotate(360deg)"] }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                className="text-blue-600"
              >
                Easiest Way
              </motion.span>{" "}
              to Get Your New Job
            </motion.h1>
            <p className="mt-3 text-lg">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-auto">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-2.5 sm:py-3 px-4 block w-full min-w-80 bg-base-100 border border-gray-200 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
                  placeholder="Enter work email"
                />
              </div>
              <button
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm text-base-100 font-medium rounded-lg border border-transparent bg-blue-600  hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Request demo
              </button>
            </div>

            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium uppercase">Trusted by:</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/3">
            <motion.img
              className="md:w-md lg:w-lg xl:w-xl 2xl:w-2xl w-full object-cover object-center absolute top-15 right-30 mt-4 sm:mt-8 rounded-tr-4xl rounded-tl-4xl rounded-br-4xl  border-s-8 border-b-8 border-blue-500"
              src={"https://i.postimg.cc/25863xZH/Team-1.webp"}
              alt="Hero Image 1"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            />
           
            <motion.img
              className="md:w-sm lg:w-md xl:w-lg 2xl:w-xl w-full object-cover object-center absolute bottom-10 right-30 mt-4 sm:mt-8 rounded-tr-4xl rounded-br-4xl rounded-bl-4xl border-e-6 border-b-6 border-blue-500"
              src={"https://i.postimg.cc/2SY3NY8N/Team-2.webp"}
              alt="Hero Image 2"
              animate={{ x: [0, 50, 0] }}
              transition={{
                duration: 10,
                delay: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>
      {/* End Hero */}
    </div>
  );
};

export default Banner;
