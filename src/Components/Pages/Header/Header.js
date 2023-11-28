import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className='w-full h-[80px] bg-blue-900 flex items-center text-white justify-around'>
            <div>
                <h1 className='text-3xl font-bold'>Logo</h1>
            </div>
            <ul>
                <li className='flex gap-11'>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/home">Home</Link>
                    
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;