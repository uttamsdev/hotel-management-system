import React, { Fragment, useState } from "react";
import {
  MdDashboardCustomize,
  MdOutlinePhoneCallback,
} from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import useAdmin from "../../Hooks/useAdmin";
import UserImage from "../../assets/avatar.png";

import {
  Bars3BottomRightIcon,
  XMarkIcon,
  ChevronDownIcon,

} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { BiLogOutCircle } from "react-icons/bi";

const NavbarTwo = () => {
  let [open, setOpen] = useState(false);
  const {pathname} = useLocation();
  console.log(pathname)
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const navigate = useNavigate();
  const profilePic = user?.photoURL || UserImage;
  const handleLogout = async () => {
    signOut(auth);
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="sticky top-0  z-[9999999]">
      <div className="h-8 bg-[#0F3048] hidden xl:block text-sm">
        <div className="container">
          <div className="custom-container h-8  flex mx-auto justify-between items-center">
            <div className="text-white">
              <p>Hotel Management System</p>
            </div>
            <div className="flex text-white gap-4">
              <div className="flex items-center gap-1">
                <MdOutlinePhoneCallback />
                <p>+8801400014416</p>
              </div>
              <div className="flex items-center gap-1">
                <MdMarkEmailUnread />
                <p>uttamsdev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] shadow-md backdrop-blur-3xl">
        {" "}
        {/*className='bg-[#ECF0F4]'*/}
        <div className=" text-white mx-auto xl:rounded-2xl lg:px-28 z-10 sticky top-0 shadow-none py-1">
          <nav className="flex h-[75px] w-full xl:w-[1100px] items-center justify-between custom-container mx-auto ">
            <Link to="/">
              <img
                className="w-[65px] h-[50px]"
                src="https://i.postimg.cc/vBD99T39/logos.png"
                alt=""
              />
            </Link>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black"
            >
              {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </div>
            <ul
              className={` flex flex-col bg-[#ECF0F4] xl:bg-transparent ml-4 xl:ml-0 mt-16 xl:mt-0 pt-4 xl:pt-0 rounded-xl shadow-xl xl:shadow-none  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-11/12  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-12" : "top-[-880px]"
              }`}
            >
              <li className="flex items-center gap-4 text-[17px] text-gray-800 flex-col xl:flex-row   lg:gap-8 text-center xl:text-left">
                <Link
                  className={`hover:underline hover:text-blue-600 duration-150 ${pathname==='/' && 'text-blue-600 '}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`hover:underline hover:text-blue-600 duration-150 ${pathname==='/food' && 'text-blue-600 '}`}
                  to="/food"
                >
                  Foods
                </Link>
                <Link
                  className={`hover:underline hover:text-blue-600 duration-150 ${pathname==='/rooms' && 'text-blue-600 '}`}
                  to="/rooms"
                >
                  All Rooms
                </Link>
                <Link
                  className={`hover:underline hover:text-blue-600 duration-150 ${pathname==='/contact' && 'text-blue-600 '}`}
                  to="/contact"
                >
                  Contact
                </Link>

                {/* {admin ? (
                  <Link to="/admin">Admin Dashboard</Link>
                ) : (
                  <Link to="/user">Dashboard</Link>
                )} */}
                {/* {user && (
                  <p className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {user.displayName}
                  </p>
                )} */}
                {/* {
                            user ? <button onClick={handleLogout} className='bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded ' to="/login">Logout</button> : <Link className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ' to="/login">Login</Link>
                        } */}

                {user || admin ? (
                  <Menu as="div" className="relative  text-left inline-block">
                    <div className="flex items-center">
                      <Menu.Button className="inline-flex w-full justify-center items-center">
                        <img
                          src={profilePic}
                          className="rounded-full h-8 md:mr-2 border-2 border-white shadow-sm avatar online ring-offset-blue-500 ring-offset-2"
                          alt="profile_picture"
                        />
                        <span className="hidden md:block font-medium text-gray-700">
                          {user?.displayName}
                        </span>
                        <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform scale-95"
                      enterTo="transform scale-100"
                      leave="transition ease-in duration=75"
                      leaveFrom="transform scale-100"
                      leaveTo="transform scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-lg">
                        <div className="p-1">
                          <Menu.Item>
                            <Link
                              to={admin ? "/admin" : "/user"}
                              className="flex mt-2 hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                            >
                              <MdDashboardCustomize className="h-4 w-4 mr-2" />
                              Dashboard
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              to="#"
                              onClick={handleLogout}
                              className="flex mt-2 hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                            >
                              <BiLogOutCircle className="h-4 w-4 mr-2" />
                              Logout
                            </Link>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link
                    to="/login"
                    className="inline-block  px-6 py-[5px] text-white a text-[17px] bg-gradient-to-r from-blue-600 to-blue-700 rounded shadow-lg hover:from-blue-500 hover:to-blue-700 hover:scale-102 transition-transform duration-300"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
