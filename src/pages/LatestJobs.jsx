import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 relative inline-block">
          Latest <span className="text-primary"> Jobs</span>
          <span className="block h-1 bg-teal-600 w-1/2 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Explore the most recent job opportunities tailored for you.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-8 md:px-0 gap-3">
        {jobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </>
  );
};

export default LatestJobs;
