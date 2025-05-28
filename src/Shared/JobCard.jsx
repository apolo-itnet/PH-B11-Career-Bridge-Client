import React from "react";
import { FaClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

const JobCard = ({ job, ...props }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div {...props}>
      <div className="rounded-xl border border-base-300 p-4 bg-base-100 hover:border-blue-500 hover:shadow-sm hover:-translate-y-3 transition-all duration-500 space-y-4 h-full">
        <div className="flex flex-col items-start justify-center gap-4 min-h-full ">
          {/* Header */}
          <div className="flex items-center gap-4 w-full mb-3">
            <img
              src={company_logo || "https://via.placeholder.com/48"}
              alt="FlyChat"
              className="w-12 h-12 rounded-md"
            />
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <FiMapPin />
                <span>{location}</span>
              </div>
            </div>
          </div>
          {/* Job Details */}
          <div className="flex-grow space-y-3">
            {/* Title */}
            <h2 className="text-lg font-medium text-gray-800 text-left">
              {title}
            </h2>

            {/* Job Type & Time */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{jobType}</span>
              <span className="mx-1">•</span>
              <span className="flex items-center gap-1">
                <FaClock className="text-gray-400" />
                {applicationDeadline}
              </span>
            </div>

            {/* Description */}
            <p className="text-left text-sm text-gray-600 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {requirements.map((requirement, index) => (
                <span
                  key={index}
                  className="bg-base-200 text-base-content text-xs p-2 rounded-md border border-base-300 hover:bg-base-300 transition-all duration-200"
                >
                  {requirement}
                </span>
              ))}
            </div>
          </div>
          {/* salary & button */}
          <div className="mt-auto w-full flex flex-col gap-2">
            {/* Salary */}
            <div className="text-left flex gap-2 items-center">
              <span className="text-md font-semibold text-gray-500">
                Salary Range:
              </span>
              <p className="text-indigo-600 font-semibold text-lg">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </p>
              <p className="text-sm text-gray-500">/monthly</p>
            </div>

            {/* Button */}
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary flex">Job Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
