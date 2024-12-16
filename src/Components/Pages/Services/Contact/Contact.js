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
    <div className=" mt-12 flex flex-col lg:flex-row justify-center gap-12 container mx-auto">
      <div className="">
        <p className="text-2xl text-center xl:text-left  xl:text-xl uppercase mb-6">
          Contact Info
        </p>
        <div className="flex gap-4 mb-6 ml-12 xl:ml-0">
          <div className="primary-bg shadow-xl rounded-md w-16 h-16 flex items-center">
            <MdMarkEmailRead className="text-5xl mx-auto text-white" />
          </div>
          <div>
            <p className="text-[#8B8B8B] uppercase font-bold">Email Us</p>
            <p>mail@uttamsaha.com</p>
            <p>uttamsdev@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6 ml-12 xl:ml-0">
          <div className="primary-bg shadow-xl rounded-md w-16 h-16 flex items-center">
            <PiPhoneCall className="text-5xl mx-auto text-white" />
          </div>
          <div>
            <p className="text-[#8B8B8B] uppercase font-bold">Call Us</p>
            <p>+8801400014416</p>
            <p>+15654645555</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6 ml-12 xl:ml-0">
          <div className="primary-bg shadow-xl rounded-md w-16 h-16 flex items-center">
            <ImLocation2 className="text-5xl mx-auto text-white" />
          </div>
          <div>
            <p className="text-[#8B8B8B] uppercase font-bold">Location</p>
            <p>Mohakhali, Amtoli</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div>
          <div className="">
            <p className="text-xl uppercase mb-3 mt-8 text-center xl:text-left ">
              Social Info
            </p>
            <div className="flex justify-center xl:justify-normal">
              <div className="flex gap-4">
                <Link className="text-2xl hover:scale-75 duration-500">
                  <SiFacebook />
                </Link>
                <Link className="text-2xl hover:scale-75 duration-500">
                  <RiInstagramLine />
                </Link>
                <Link className="text-2xl hover:scale-75 duration-500">
                  <FaLinkedinIn />
                </Link>
                <Link className="text-2xl hover:scale-75 duration-500">
                  <BiLogoGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto xl:mx-0 xl:w-[866px] h-auto pb-4 bg-slate-100 rounded-md shadow relative z-[99]">
        <div className="overlay_test">
          <div className="flex justify-between items-center">
            <p className="text-3xl xl:text-4xl font-bold ml-8 pt-4 mb-8">
              Contact <span className="">Us</span>
            </p>
            <img src="icon2.webp" alt="" />
          </div>
          <div className="flex flex-col items-center ">
            <input
              className="bg-slate-50 w-10/12 xl:w-[770px] h-[50px] outline-none  rounded  mb-3 pl-3   "
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-slate-50 w-10/12 xl:w-[770px] h-[50px] outline-none  rounded  mb-3 pl-3   "
              type="text"
              placeholder="Your email"
            />
            <input
              className=" bg-slate-50 w-10/12 xl:w-[770px] h-[50px] outline-none  rounded  mb-3 pl-3    "
              type="text"
              placeholder="Your subject"
            />
            <textarea
              className="bg-slate-50 w-10/12 xl:w-[770px] h-[150px] xl:h-[250px] outline-none border  rounded  mb-3 pl-3 pt-2 "
              type="text"
              placeholder="Your message"
            />
            <button className=" text-sm mr-2  active:scale-75 uppercase font-medium primary-bg text-white py-3 px-8 rounded-full hover:opacity-80 w-10/12 xl:w-[770px] mb-4  duration-500 mt-4">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
