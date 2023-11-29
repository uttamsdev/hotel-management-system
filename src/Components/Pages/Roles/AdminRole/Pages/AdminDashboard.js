import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import userPhoto from "../../../../assets/avatar.png";

const AdminDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const profilePic = user.photoURL || userPhoto;
  return (
    <div>
      <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">AdminDashboard</p>
      <div>
        <p className="text-center text-3xl mb-4 text-gray-600 "> Welcome back  to your dashboard</p>
      </div>
        <div className="flex justify-center">
          <div className="w-[450px] h-[350px] shadow-xl flex flex-col items-center justify-center">
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

export default AdminDashboard;
