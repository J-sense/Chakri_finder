import React from "react";
import Banner from "../components/Banner";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto items-center flex-col">
      {/* <Banner /> */}
      <Banner />
      <LatestJobs />
    </div>
  );
};

export default Home;
