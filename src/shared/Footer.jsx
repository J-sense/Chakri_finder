import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-teal-400 mb-2">JobHunt</h3>
          <p className="text-sm mt-2">
            Your gateway to the latest tech jobs in Bangladesh and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-teal-400 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-teal-400 transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-teal-400 mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/faq" className="hover:text-teal-400 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-teal-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-teal-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-teal-400 mb-2">
            Follow Us
          </h4>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            <a
              href="#"
              className="hover:text-teal-400 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
