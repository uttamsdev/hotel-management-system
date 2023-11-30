import React from "react";
import Loading from "../../../Shared/Loading";
import userPhoto from "../../../../assets/avatar.png";
import { useAuthState } from "react-firebase-hooks/auth";
import {AiOutlineDashboard} from 'react-icons/ai'
import auth from "../../../../Firebase/firebase.init";
const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const profilePic = user.photoURL || userPhoto;
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <div>
      <p className=' border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl'><AiOutlineDashboard className='ml-5 mr-3 w-6 h-6'/>User's Dashboard</p>
            <p className='text-left pl-8 text-[#16728e]  text-md  md:text-xl py-3 border-l-4 border-[#5bc0de]  mb-8 bg-white rounded-md w-9/12 md:w-1/3 mx-auto  bg-gradient-to-r from-stone-100 to-blue-50 drop-shadow-md'>Hey   {user?.displayName.split(' ')[0]}, You are welcome to your dashboard.</p>
        <div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 xl:w-[450px] h-[350px] shadow-xl flex flex-col items-center justify-center">
            <div className="avatar online">
              <div className="w-32 mb-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className="" src={profilePic} alt="" />
              </div>
            </div>
            <p className="text-2xl font-bold ">{user.displayName}</p>
            {/* <p>{user.uid}</p> */}
            <p className="mt-1">{user.email}</p>
            {/* <p>{user.phoneNumber}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
