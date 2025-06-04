import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
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
  } = useLoaderData();

  return (
    <div>
      <div className="responsive-padding">
        <div className="w-full h-96 my-10  ">
          <img
            src={"https://i.postimg.cc/qBQCLTbr/Tech-Office-1.webp"}
            alt={company}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex justify-between items-center pb-6 border-b border-base-300">
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex items-center gap-4">
              <p>{jobType} </p>
              <p>{applicationDeadline}</p>
            </div>
          </div>
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>

        <div className="w-full flex gap-8 py-10">
          {/* left side info */}
          <div className="flex-2 w-full">
            <div className="p-6 border border-base-300 rounded-lg">
              <h2 className="text-2xl font-bold py-4 border-b border-base-300 ">
                Employment Information
              </h2>

              <div className="flex items-start col-span-full py-4">
                <span className="w-28 font-medium">Industry:</span>
                <span className="font-bold">
                  Content Writer / Finance / Human Resource
                </span>
              </div>

              <div className="flex items-center gap-10">
                {/* left */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-28 font-medium">Job Level:</span>
                    <span>{category}</span>
                  </div>

                  <div className="flex items-center justify-start">
                    <span className="w-28 font-medium">Salary:</span>
                    <span className="text-blue-600 font-bold text-base">
                      {salaryRange?.salaryMin} - {salaryRange?.salaryMax}/- {""}
                      {salaryRange?.salaryCurrency} /monthly
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-28 font-medium">Job Type:</span>
                    <span>{jobType}</span>
                  </div>
                </div>

                {/* right  */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-fit font-medium pr-4">
                      Open Positions:
                    </span>
                    <span>4</span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-fit font-medium pr-4">Experience:</span>
                    <span>3 Year</span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-fit font-medium pr-4">Location:</span>
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right side info */}
          <div className="flex-1 w-full">
            <div className="p-6 border border-base-300 rounded-lg">
              <div className="">
                <div className="flex items-center justify-start gap-2 pb-6 border-b border-base-300 ">
                  <img
                    src={company_logo}
                    alt=""
                    className=" w-32 h-14 object-contain"
                  />
                  <p className="text-2xl font-bold border-l-2 border-gray-300 pl-2">
                    {company}
                  </p>
                </div>

                <div className="flex items-start py-3">
                  <ol className="flex flex-col gap-3">
                    <li>976 Franecki Points Apt. 672New Dinashire, HI 52659</li>
                    <li>Website: https://ondo.mn</li>
                    <li>Phone: +19388960094</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
