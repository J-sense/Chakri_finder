import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

const JobCard = ({ job }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 12px rgba(45, 212, 191, 0.3)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#121212] text-gray-300 border border-gray-700 rounded-xl md:h-96 h-[460px] p-6 space-y-4 max-w-2xl mx-auto relative"
      >
        {/* Company and Logo */}
        <div className="flex items-center gap-4">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-14 h-14 object-contain rounded-full border border-gray-600"
          />
          <div>
            <h2 className="text-xl font-bold text-teal-400">{job.title}</h2>
            <p className="text-sm">{job.company}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="flex flex-wrap gap-4 text-sm">
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
        <p className="text-sm text-gray-400">{job.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Salary + HR */}
        <div className="md:flex justify-between items-center border-t border-gray-700 pt-4 text-sm">
          <span className="text-teal-400 font-semibold">
            ৳ {job.salaryRange.min.toLocaleString()} -{" "}
            {job.salaryRange.max.toLocaleString()}
          </span>
          <p>Contact: {job.hr_email}</p>
        </div>

        {/* View Details Button */}
        <div className=" absolute bottom-4 text-start">
          <Link to={`/jobs/${job._id}`}>
            <motion.button
              whileTap={{ scale: 0.5 }}
              whileHover={{ scale: 1 }}
              className="bg-zinc-900 hover:bg-teal-600 hover:text-white text-teal-500 font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default JobCard;
