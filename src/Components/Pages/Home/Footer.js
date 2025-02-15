import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation();
  console.log(pathname);
  return (
    <footer
      className={`bg-gray-900 text-gray-200 ${
        pathname?.pathname === "/contact" ? "mt-0" : "mt-3"
      }`}
    >
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hotel Radison</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Experience the perfect blend of comfort and luxury in the heart of
            the city. Your satisfaction is our priority.
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-teal-400 transition">
              <FaFacebookF size={20} />
            </Link>
            <Link to="/" className="hover:text-teal-400 transition">
              <FaInstagram size={20} />
            </Link>
            <Link to="/" className="hover:text-teal-400 transition">
              <FaTwitter size={20} />
            </Link>
            <Link to="/" className="hover:text-teal-400 transition">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-teal-400 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/food" className="hover:text-teal-400 transition">
                Foods
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
            {/* <li><Link to="/" className="hover:text-teal-400 transition">Login</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <MdLocationOn className="mr-2 text-teal-400" size={20} />
              123 Luxury Avenue, Cityville, State 12345
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2 text-teal-400" size={20} />
              +8801400014416
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2 text-teal-400" size={20} />
              info@hotelradison.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2  focus:outline-none border-none "
            />
            <button
              type="submit"
              className="bg-teal-400 relative left-[-5px] text-white px-4 py-2 rounded-r-md border-none outline-none hover:bg-teal-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Hotel Radison. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
