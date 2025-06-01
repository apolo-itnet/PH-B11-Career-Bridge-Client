import React, { use, useState } from "react";
import { myApplicationPromise } from "../../API/applicationApi";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div>
      <div className="responsive-padding">
        <h1 className="font-semibold">
          Total Jobs Apply - {applications.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((application, index) => (
                <tr key={index}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={application?.company_logo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{application?.company}</div>
                        <div className="text-sm opacity-50">
                          {application?.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {application?.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {application?.category}
                    </span>
                  </td>
                  <td>{application?.applicationDeadline}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
