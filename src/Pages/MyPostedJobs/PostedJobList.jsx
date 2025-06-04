import React, { use } from "react";
import { jobPostedByPromise } from "../../API/PostedJobsApi";
import { Link } from "react-router";
import { EyeIcon } from "lucide-react";

const PostedJobList = ({ jobPostedByPromise }) => {
  const postedJobs = use(jobPostedByPromise);

  return (
    <div>
      <div className="w-full responsive-padding">
        <h2 className="text-sm font-bold">
          Job Post List: {postedJobs.length}{" "}
        </h2>

        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>View Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {postedJobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job.company}</td>
                  <td>{job.title}</td>
                  <td>{job.jobCategory}</td>
                  <td>{job.applicationDeadline}</td>
                  <td><Link className="btn btn-primary" to={`/applications/${job._id}`}> <EyeIcon size={14}/> View </Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostedJobList;
