import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="bg-[#121212] text-gray-300 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 space-y-4 max-w-2xl mx-auto">
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
          <span
            key={idx}
            className="bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary + HR */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-4 text-sm">
        <span className="text-teal-400 font-semibold">
          ৳ {job.salaryRange.min.toLocaleString()} -{" "}
          {job.salaryRange.max.toLocaleString()}
        </span>
        <span>Contact: {job.hr_email}</span>
      </div>
    </div>
  );
};

export default JobCard;
