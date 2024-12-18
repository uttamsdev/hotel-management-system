import React from 'react'
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import useAdmin from '../../Hooks/useAdmin';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();
    const handleLogout = async()=> {
        signOut(auth);
        navigate("/login");
    }
  return (
    <div className='sticky top-0 shadow-lg z-[9999] hidden xl:block'>
        <div className='h-8 bg-[#0F3048] relative z-[99999]'>
            <div className='w-[1100px] mx-auto'>
            <div className='custom-container h-8  flex mx-auto justify-between items-center text-sm'>
            <div className='text-white'>
                <p>Hotel Management System</p>
            </div>
            <div className='flex text-white gap-4'>
                <div className='flex items-center gap-1'>
                    <MdOutlinePhoneCallback/>
                    <p>+8801400014416</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdMarkEmailUnread/>
                    <p>mail@uttamsaha.com</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='bg-[#ECF0F4]'> {/*className='bg-[#ECF0F4]'*/}
        <div className=' backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 text-white mx-auto xl:rounded-2xl lg:px-28 rounded-none z-10 sticky top-0 shadow-none py-2 bg-transparent border-none'>
            <nav className='flex h-[80px] w-[1100px] items-center justify-between custom-container mx-auto '>
                <div>
                    <img src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png" alt="" />
                </div>
                <ul>
                    <li className='flex items-center gap-4 text-[18px] text-gray-800 text-sm'>
                        <Link to="/">Home</Link>
                        <Link to="/food">Foods</Link>
                        <Link to="/rooms">All Rooms</Link>
                        <Link to="/contact">Contact</Link>
                       
                        {
                            admin ? <Link to="/admin">Admin Dashboard</Link> : <Link to="/user">Dashboard</Link>
                        }
                        {
                            user && <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{user.displayName}</p>
                        }
                        {
                            user ? <button onClick={handleLogout} className='bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ' to="/login">Logout</button> : <Link className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ' to="/login">Login</Link>
                        }
                        
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    </div>
  )
}

export default Navbar;