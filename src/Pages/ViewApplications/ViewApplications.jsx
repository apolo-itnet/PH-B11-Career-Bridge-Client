import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { showSweetNotify } from "../../Utility/notification";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
      .then((res) => {
        console.log(res.data);
        if(res.data.modifiedCount){
          showSweetNotify('Job Status Updated')
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="responsive-padding py-10">
        <h2>
          {" "}
          {applications.length} Here is the all application {job_id}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Candidate Name</th>
                <th>Job Title</th>
                <th>Job Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((jobs, index) => (
                <tr key={jobs._id}>
                  <th>{index + 1}</th>
                  <td>{jobs.fullName}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusChange(e, jobs._id)}
                      defaultValue={jobs.status}
                      className="select"
                    >
                      <option disabled>Update Status</option>
                      <option defaultValue={"Pending"}>Pending</option>
                      <option defaultValue={"Interview"}>Interview</option>
                      <option defaultValue={"Hired"}>Hired</option>
                      <option defaultValue={"Rejected"}>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
