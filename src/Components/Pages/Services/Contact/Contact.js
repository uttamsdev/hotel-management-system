import React from "react";
import { motion } from "framer-motion";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="h-[calc(100vh_-_115px)] bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container w-full mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Get in Touch with Us</h1>
          <p className="mt-4 text-xl text-gray-300">
            Have questions? We'd love to hear from you! Fill out the form below
            or reach us through our contact details.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<MdMail className="h-6 w-6" />}
                  title="Email Us"
                  items={["mail@uttamsaha.com", "uttamsdev@gmail.com"]}
                />
                <ContactItem
                  icon={<MdPhone className="h-6 w-6" />}
                  title="Call Us"
                  items={["+8801400014416", "+15654645555"]}
                />
                <ContactItem
                  icon={<MdLocationOn className="h-6 w-6" />}
                  title="Location"
                  items={["Mohakhali, Amtoli", "Dhaka, Bangladesh"]}
                />
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    <SocialLink href="#" icon={<FaFacebook className="h-5 w-5" />} label="Facebook" />
                    <SocialLink href="#" icon={<FaInstagram className="h-5 w-5" />} label="Instagram" />
                    <SocialLink href="#" icon={<FaLinkedin className="h-5 w-5" />} label="LinkedIn" />
                    <SocialLink href="#" icon={<FaGithub className="h-5 w-5" />} label="GitHub" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white text-gray-950 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  <FaPaperPlane className="inline-block mr-2" /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, items }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-500 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm uppercase text-gray-700">{title}</h3>
        {items.map((item, index) => (
          <p key={index} className="text-sm text-gray-600">{item}</p>
        ))}
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default ContactPage;

