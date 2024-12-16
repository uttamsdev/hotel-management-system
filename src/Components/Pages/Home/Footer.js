import React from "react";
import { SiFacebook } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0E2737] h-[100px] xl:h-[70px] text-gray-300">
      <dir className=" h-[100px] xl:h-[70px] flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-0 xl:justify-between xl:w-[1100px] mx-auto !pl-0">
        <div>
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved @uttamsaha
          </p>
        </div>
        <div className="flex gap-4">
          <Link className="hover:text-white">
            <SiFacebook />
          </Link>
          <Link className="hover:text-white">
            <RiInstagramLine />
          </Link>
          <Link className="hover:text-white">
            <FaLinkedinIn />
          </Link>
          <Link className="hover:text-white">
            <BiLogoGithub />
          </Link>
        </div>
      </dir>
    </div>
  );
};

export default Footer;
