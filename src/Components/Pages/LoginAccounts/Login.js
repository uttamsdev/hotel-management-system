import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [userFomDB, setUserFromDB] = useState("");

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
    return <Loading></Loading>;
  }

  ///TODO: Ekhane replace true dewai home e jacche eta conflect kortese nicher navigate er sathe
  if (user) {
    navigate(from, { replace: true }); // jekhan theke login korse se khane niye jabe
    console.log("user login: ", user);
  }
  const handleEmailPasswordLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/users/${email}`
    )
      .then((res) => res.json())
      .then((data) => setUserFromDB(data?.data?.role));
    await signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  if (user && (userFomDB === "user" || userFomDB === "admin")) {
    navigate("/");
  }

  return (
    <div className="w-full h-[calc(100vh_-_115px)]  pt-20  bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50">
  <div className="flex items-center justify-center">
    <form
      onSubmit={handleEmailPasswordLogin}
      className="w-11/12 xl:w-[460px] bg-white rounded-lg shadow-2xl p-8"
    >
      <div className="text-center mb-6">
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg h-10 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg h-10 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="text-right mt-1">
          <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-sm text-red-500 mb-4">{errorMessage}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
      >
        Login
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Create Account Link */}
      <p className="text-center text-gray-600 mt-6">
        New to Redison?{" "}
        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
          Create Account
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Login;
