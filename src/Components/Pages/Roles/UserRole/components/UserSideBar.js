import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import avatar from "../../../../assets/avatar.png";
import { FaHome } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";

const SideBar = forwardRef(({ showNav }, ref) => {
  const [user, loading] = useAuthState(auth);

  const profile = user?.photoURL || avatar;

  const router = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div
      ref={ref}
      className="bg-[#0F172A] fixed w-56 h-full shadow-lg z-[9999]"
    >
      {/* Sidebar Logo */}
      <div className="flex justify-center mt-6 mb-14">
        <img
          src={profile}
          className="w-20 h-auto rounded-full ring-4 ring-offset-4"
          alt="company logo"
        />
      </div>
      <p className="text-white mt-[-40px] font-bold text-xl text-center mb-4  rounded-full w-48  mx-auto">
        {" "}
        User Dashboard
      </p>
      {/* Sidebar Menu */}
      <div className="flex flex-col">
        <Link to="/user">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/user"
                        ? "primary-bg text-white rounded-r-full"
                        : "text-white hover:bg-[#0284c7] hover:text-white rounded-r-full"
                    }`}
          >
            <div className="mr-2">
              <HomeIcon className="w-5 h-5" />
            </div>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/user/my-orders">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/user/my-orders"
                        ? "primary-bg text-white rounded-r-full"
                        : "text-white hover:bg-[#0284c7] hover:text-white rounded-r-full"
                    }`}
          >
            <div className="mr-2">
              <FaHome className="w-5 h-5" />
            </div>
            <p>My Room Orders</p>
          </div>
        </Link>
        <Link to="/user/my-food-orders">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/user/my-food-orders"
                        ? "primary-bg text-white rounded-r-full"
                        : "text-white hover:bg-[#0284c7] hover:text-white rounded-r-full"
                    }`}
          >
            <div className="mr-2">
              <IoFastFoodSharp className="w-5 h-5" />
            </div>
            <p>My Food Orders</p>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
