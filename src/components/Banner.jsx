import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.png"; // Replace with your image path

const Banner = () => {
  return (
    <div className="bg-black min-h-[100vh] flex flex-col lg:flex-row items-center justify-between  px-6 py-12 gap-8">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left space-y-6"
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-teal-400">
          Find Your <span className="text-primary">Dream Job</span> Today
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
          Discover thousands of remote and in-office jobs tailored just for you.
          Sign up today and take your career to the next level!
        </p>
        <Link to="/jobs">
          <button className="btn text-teal-500 hover:bg-teal-700 hover:text-white px-8 py-3 rounded-xl transition duration-300 ease-in-out">
            Explore Jobs
          </button>
        </Link>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <img
          src={bannerImg}
          alt="Job Search Banner"
          className="w-full h-[525px] object-contain rounded-lg items-end"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
