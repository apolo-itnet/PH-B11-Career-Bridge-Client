import React, { use, useEffect } from "react";
import JobCard from "../../Shared/JobCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const LatestJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, [])

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 responsive-padding">
          {jobs.map((job, index) => (
            <JobCard
              key={job._id}
              job={job}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            ></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
