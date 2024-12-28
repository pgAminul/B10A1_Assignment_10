import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 animate-footer-up">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            GearSprint
          </div>
          <p className="text-center md:text-left">Your Sports Destination</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-400 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: info@gearsprint.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=100032484008187"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://x.com/aminul_islam_S"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-aminul-islam-showrov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/aminul_islam_showrov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        <p>© 2024 GearSprint. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
