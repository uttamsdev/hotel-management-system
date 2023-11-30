import React, { Fragment } from 'react';
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from 'react-router-dom';
import UserImage from '../../../../assets/avatar.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../../Shared/Loading';
import { FaHome } from "react-icons/fa";


const StudentTopBar = ({ showNav, setShowNav }) => {
    const [user, loading] = useAuthState(auth);
    const profilePic = user?.photoURL || UserImage;

    if(loading){
        return <Loading></Loading>
    }
    const logOut = () => {
        // localStorage.removeItem("role");
        // window.location.reload();
        signOut(auth);
    }
    return (
        <div className={`fixed z-10 w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}>
            <div className='flex items-center gap-3'>
            <div className="pl-4 md:pl-16">
                <Bars3CenterLeftIcon
                    className="h-8 w-8 text-gray-700 cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                />
            </div>
            <Link to="/" className='btn btn-outline'><FaHome className='text-xl'/>Back To Home</Link>
            </div>
            <div className='flex items-center pr-4 md:pr-16'>
                <Popover className='relative' >
                    <Popover.Button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-700'>
                        <BellIcon className='h-6 w-6' />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel className="absolute -right-16 sm:right-4 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                            <div className="relative p-3">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-gray-700 font-medium">Notifications</p>
                                    <Link to="#" className='text-sm text-green-500'>Mark all as read</Link>
                                </div>
                                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Notification Title
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Test Notification text for design
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className='inline-flex w-full justify-center items-center'>
                            <img src={profilePic} className='rounded-full h-8 md:mr-4 border-2 border-white shadow-sm' alt="profile_picture" />
                            <span className='hidden md:block font-medium text-gray-700'>{user?.displayName}</span>
                            <ChevronDownIcon className='ml-2 h-4 w-4 text-gray-700' />
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
                        <Menu.Items className="absolute right-0 w-56  mt-2 origin-top-right bg-white rounded shadow-sm">
                            <div className="p-1">
                              
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                        Settings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" onClick={logOut} className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};

export default StudentTopBar;