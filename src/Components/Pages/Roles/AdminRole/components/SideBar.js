
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import avatar from '../../../../assets/avatar.png'
import auth from '../../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading';
import { TbHomeBolt } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { BiSolidHomeSmile } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
import { MdFoodBank } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";







const SideBar = forwardRef(({ showNav }, ref) => {
    const [user, loading] = useAuthState(auth);
    const profile = user?.photoURL || avatar;

    const router = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div ref={ref} className="bg-[#0F172A] fixed w-56 h-full shadow-lg z-10">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={profile} className='w-20 h-auto rounded-full ring-4 ring-offset-4' alt="company logo" />
            </div>
            <p className='text-white mt-[-40px] font-bold text-xl text-center mb-4  rounded-full w-48  mx-auto'>Administrator</p>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/admin'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/admin/view-orders'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-orders"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <TbHomeBolt className='w-5 h-5' />
                        </div>
                        <p> Room Orders</p>
                    </div>
                </Link>
                <Link to='/admin/view-food-orders'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-food-orders"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdFastfood className='w-5 h-5' />
                        </div>
                        <p>View Food Orders</p>
                    </div>
                </Link>
                <Link to='/admin/add-room'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-room"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <BiSolidHomeSmile className='w-5 h-5' />
                        </div>
                        <p>Add Room</p>
                    </div>
                </Link>
               
                <Link to='/admin/all-room'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-room"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <SiHomebridge className='w-5 h-5' />
                        </div>
                        <p>All Rooms</p>
                    </div>
                </Link>
                <Link to='/admin/add-food'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-food"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdFoodBank className='w-5 h-5' />
                        </div>
                        <p>Add Food</p>
                    </div>
                </Link>
                <Link to='/admin/all-food'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-food"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <IoFastFoodSharp className='w-5 h-5' />
                        </div>
                        <p>All Foods</p>
                    </div>
                </Link>
                <Link to='/admin/manage-users'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/manage-users"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <FaUserShield className='w-5 h-5' />
                        </div>
                        <p>View Users</p>
                    </div>
                </Link>
              
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';

export default SideBar;