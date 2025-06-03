import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import PostedJobList from "./PostedJobList";
import { loadingNavFooter } from "../../Shared/LoadingSpinner";
import { jobPostedByPromise } from "../../API/PostedJobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-6">My Posted Jobs </h2>
      <Suspense fallback={loadingNavFooter}>
        <PostedJobList jobPostedByPromise={jobPostedByPromise(user.email)}></PostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
