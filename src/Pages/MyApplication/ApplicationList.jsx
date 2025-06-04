import React, { use, useEffect, useState } from "react";
import { myApplicationPromise } from "../../API/applicationApi";
import { Link } from "react-router";
import { Building2, DollarSign, Eye, MapPin } from "lucide-react";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  const [jobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data))
      .catch((error) => console.log("failed to fetch job", error));
  }, []);

  const getFullJobs = (jobId) => {
    return jobs.find((job) => job._id === jobId);
  };

  return (
    <div className="responsive-padding">
      
      {applications.map((application) => {
        const fullJob = getFullJobs(application.jobId);

        return (
          <div
            key={application._id}
            className="max-w-5xl mx-auto flex justify-between my-8 p-6 border border-gray-200 hover:border-blue-500 rounded-xl hover:-translate-y-2 transition duration-500 ease-in-out group"
          >
            <div className="flex items-center pr-4 mr-4 border-r border-gray-300 group-hover:border-blue-500 transition duration-300 ease-in-out ">
              <img
                src={fullJob?.company_logo || "fallback.png"}
                alt="Company Logo"
                className="w-32 h-14 object-contain"
              />
            </div>

            <div className="flex-3 w-full">
              <h2 className="text-2xl font-bold">{fullJob?.title}</h2>
              <p className="flex items-center gap-2 text-gray-600 pt-1">
                <Building2 size={18} />
                {fullJob?.company}
              </p>

              <div className="flex items-center gap-4 py-1">
                <p className="flex items-center gap-2 text-gray-600 pt-1">
                  <MapPin size={18} />
                  {fullJob?.location}
                </p>

                <p className=" font-semibold text-md pt-1 flex items-center">
                  <DollarSign size={18} /> -{" "}
                  <span className="text-blue-600">
                    {fullJob?.salaryRange?.salaryMin
                      ? `${fullJob.salaryRange.salaryMin} - ${fullJob.salaryRange.salaryMax} ${fullJob.salaryRange.salaryCurrency}`
                      : "Salary Info Not Available"}
                  </span>
                </p>
              </div>

              <p className="text-sm opacity-0 group-hover:opacity-100 group-hover:text-base-100 pt-1 p-1 px-2 group-hover:bg-blue-500 transition duration-300 ease-in-out rounded-md inline-block">
                {fullJob?.jobType}
              </p>
            </div>

            <div className="flex items-center justify-center cursor-pointer">
              <Link
                to={`/jobs/${application.jobId}`}
                className="btn btn-primary !rounded-full w-10 h-10 p-6 flex items-center justify-center  "
              >
                <button>
                  <Eye className=" cursor-pointer" size={20} />
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationList;
