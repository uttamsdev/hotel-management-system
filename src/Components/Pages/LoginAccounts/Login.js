import React, { useEffect, useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [userFomDB, setUserFromDB] = useState("");
  const [data, setData] = useState({ email: "uttamsdev@gmail.com", password: "uttamsaha" });

  let errorMessage;

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  if (error) {
    errorMessage = (
      <p className="font-bold text-red-500">Error: {error?.message}</p>
    );
  }
  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
    console.log("user login: ", user);
  }

  const handleEmailPasswordLogin = async (event) => {
    event.preventDefault();
    fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/users/${data.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserFromDB(data?.data?.role));
    await signInWithEmailAndPassword(data.email, data.password);
  };

  if (user && (userFomDB === "user" || userFomDB === "admin")) {
    navigate("/");
  }


  return (
    <div className="w-full h-[calc(100vh_-_115px)] pt-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-gray-800 ">
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleEmailPasswordLogin}
          className="w-11/12 xl:w-[460px] bg-white rounded-lg shadow-2xl p-8 relative z-[9999]"
        >
          <div className="text-center mb-6   ">
            <img
              className="w-20 mx-auto mb-3"
              src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
              alt="Redison Logo"
            />
            <h2 className="text-3xl font-extrabold text-gray-800">
              Login to Your Account
            </h2>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg h-10 px-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={data.email}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg h-10 px-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
              value={data.password}
            />
            <div className="text-right mt-1">
              <Link
                to="/reset-password"
                className="text-sm text-teal-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Create Account Link */}
          <p className="text-center text-gray-600 mt-6">
            New to Redison?{" "}
            <Link
              to="/register"
              className="text-teal-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>

      {/* Sharp Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
          className="w-full"
        >
          <path
            fill="#ffffff"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,149.3L1440,139.3V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
