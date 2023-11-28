import React from 'react'
import { SiFacebook } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-[#0E2737] h-[70px] text-gray-300'>
        <dir className=" h-[70px] flex items-center justify-between xl:w-[1100px] mx-auto">
            <div>
                <p>Copyright ©2023 All rights reserved</p>
            </div>
            <div className='flex gap-4'>
                <Link className='hover:text-white'><SiFacebook/></Link>
                <Link className='hover:text-white'><RiInstagramLine/></Link>
                <Link className='hover:text-white'><FaLinkedinIn/></Link>
                <Link className='hover:text-white'><BiLogoGithub/></Link>
            </div>
        </dir>
    </div>
  )
}

export default Footer;