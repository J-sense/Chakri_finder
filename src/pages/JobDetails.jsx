import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

// Replace this with dynamic data fetching later

const JobDetails = () => {
  const job = useLoaderData(); // for dynamic route (if needed)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] text-gray-300 min-h-screen p-6 my-16  shadow shadow-zinc-500 rounded-2xl sm:p-8 md:p-12 max-w-4xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded-full border border-gray-600 object-contain"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-teal-400">
            {job.title}
          </h1>
          <p className="text-gray-400">{job.company}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-wrap gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-teal-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-teal-400" />
          <span>{job.jobType}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-teal-400" />
          <span>Apply by: {job.applicationDeadline}</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg text-teal-400 font-semibold mb-2">
          Job Description
        </h2>
        <p className="text-gray-400">{job.description}</p>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-lg text-teal-400 font-semibold mb-2">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          {job.responsibilities.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-lg text-teal-400 font-semibold mb-2">
          Requirements
        </h2>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Salary and HR */}
      <div className="border-t border-gray-700 pt-4 text-sm sm:text-base flex justify-between items-center flex-wrap gap-2">
        <span className="text-teal-400 font-semibold">
          Salary: ৳{job.salaryRange.min.toLocaleString()} -{" "}
          {job.salaryRange.max.toLocaleString()}
        </span>
        <span className="text-gray-400">Contact HR: {job.hr_email}</span>
      </div>

      {/* Apply Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pt-6 text-start"
      >
        <Link to={`/job-application/${job._id}`}>
          <button className="bg-zinc-900 hover:bg-teal-600 text-teal-500 font-semibold px-16 py-3 rounded-lg transition-all duration-300 shadow-md">
            Apply Now
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default JobDetails;
