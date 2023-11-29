
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import CompanyLogo from '../../../../assets/logo.png'

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-lg border-r-2 border-gray-200">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={CompanyLogo} className='w-20 h-auto' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/admin'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/admin/view-orders'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-orders"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <UserIcon className='w-5 h-5' />
                        </div>
                        <p> Room Orders</p>
                    </div>
                </Link>
                <Link to='/admin/view-food-orders'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-food-orders"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <UserIcon className='w-5 h-5' />
                        </div>
                        <p>View Food Orders</p>
                    </div>
                </Link>
                <Link to='/admin/add-room'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-room"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>Add Room</p>
                    </div>
                </Link>
               
                <Link to='/admin/all-room'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-room"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>All Rooms</p>
                    </div>
                </Link>
                <Link to='/admin/add-food'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-food"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>Add Food</p>
                    </div>
                </Link>
                <Link to='/admin/all-food'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-food"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>All Foods</p>
                    </div>
                </Link>
                <Link to='/admin/manage-users'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/manage-users"
                            ? 'bg-green-100 text-green-500'
                            : 'text-gray-400 hover:bg-green-100 hover:text-green-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
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