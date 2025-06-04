import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import { loadingNavFooter } from "../../Shared/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import { myApplicationPromise } from "../../API/applicationApi";

const MyApplication = () => {
  const { user } = useAuth();

  return (
    <div>
      <section className="w-full">
        <div className="py-12 bg-blue-200 ">
          <h1 className="text-4xl font-bold py-6 responsive-padding">Applied List </h1>
        </div>
        {/* <ApplicationStat></ApplicationStat> */}
        <Suspense fallback={loadingNavFooter}>
          <ApplicationList
            myApplicationPromise={myApplicationPromise(user.email)}
          ></ApplicationList>
        </Suspense>
      </section>
    </div>
  );
};

export default MyApplication;
