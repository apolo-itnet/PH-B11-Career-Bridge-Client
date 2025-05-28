import React from "react";
import Banner from "./Banner";
import LatestJobs from "./LatestJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestJobs jobsPromise={jobsPromise}></LatestJobs>
    </div>
  );
};

export default Home;
