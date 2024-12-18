import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="w-full h-[calc(100vh_-_115px)] bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center py-14 relative z-[999]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-200">
            Get in Touch with Us
          </h1>
          <p className="text-gray-400 mt-4">
            Have questions? We’d love to hear from you! Fill out the form below
            or reach us through our contact details.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full lg:flex-row gap-10 items-start container mx-auto px-8">
          {/* Contact Info Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 lg:w-1/3 w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact Information
            </h2>
            {/* Email Info */}
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-blue-500 shadow-lg rounded-full w-14 h-14 flex items-center justify-center">
                <MdMarkEmailRead className="text-3xl text-white" />
              </div>
              <div>
                <p className="text-gray-600 uppercase font-semibold">
                  Email Us
                </p>
                <p className="text-gray-800">mail@uttamsaha.com</p>
                <p className="text-gray-800">uttamsdev@gmail.com</p>
              </div>
            </div>
            {/* Phone Info */}
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-blue-500 shadow-lg rounded-full w-14 h-14 flex items-center justify-center">
                <PiPhoneCall className="text-3xl text-white" />
              </div>
              <div>
                <p className="text-gray-600 uppercase font-semibold">Call Us</p>
                <p className="text-gray-800">+8801400014416</p>
                <p className="text-gray-800">+15654645555</p>
              </div>
            </div>
            {/* Location Info */}
            <div className="flex gap-4 items-center">
              <div className="bg-blue-500 shadow-lg rounded-full w-14 h-14 flex items-center justify-center">
                <ImLocation2 className="text-3xl text-white" />
              </div>
              <div>
                <p className="text-gray-600 uppercase font-semibold">
                  Location
                </p>
                <p className="text-gray-800">Mohakhali, Amtoli</p>
                <p className="text-gray-800">Dhaka, Bangladesh</p>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-125"
                >
                  <SiFacebook />
                </Link>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-125"
                >
                  <RiInstagramLine />
                </Link>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-125"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-125"
                >
                  <BiLogoGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 lg:w-2/3 w-full">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sharp Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,213.3C672,213,768,235,864,240C960,245,1056,235,1152,224C1248,213,1344,192,1392,186.7L1440,181.3V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
