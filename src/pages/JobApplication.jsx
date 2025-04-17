import React, { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";

const JobApplicationForm = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const handleForm = (e) => {
    e.preventDefault();
    const linkedin = e.target.linkedin.value;
    const applicant_email = e.target.email.value;
    const resume = e.target.resume.value;
    const portfolio = e.target.linkedin.value;
    const applicationInfo = { linkedin, resume, portfolio, applicant_email };
    fetch(`http://localhost:3000/job-applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-0">
      <div className="max-w-xl mx-auto p-6 md:mx-0 bg-zinc-900 text-teal-400 rounded-2xl shadow-md my-30">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-300 ">
          Job Application Form
        </h2>
        <form className="space-y-4" onSubmit={handleForm}>
          {/* Full Name */}

          {/* Email Address */}
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="url"
              placeholder="Paste email as a URL (for testing)"
              className="w-full px-4 py-2 bg-zinc-800 text-teal-400 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue={user.email}
              name="email"
              readOnly
            />
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="block mb-1">LinkedIn Profile URL</label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/your-profile"
              className="w-full px-4 py-2 bg-zinc-800 text-teal-400 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue="https://linkedin.com/in/your-profile"
              name="linkedin"
            />
          </div>

          {/* Resume URL */}
          <div>
            <label className="block mb-1">
              Resume Link (Google Drive, etc.)
            </label>
            <input
              type="url"
              placeholder="https://drive.google.com/your-resume-link"
              className="w-full px-4 py-2 bg-zinc-800 text-teal-400 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue="https://linkedin.com/in/your-profile"
              name="resume"
            />
          </div>

          {/* Portfolio URL */}
          <div>
            <label className="block mb-1">Portfolio Link (optional)</label>
            <input
              type="url"
              placeholder="https://your-portfolio.com"
              className="w-full px-4 py-2 bg-zinc-800 text-teal-400 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue="https://linkedin.com/in/your-profile"
              name="portfolio"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
