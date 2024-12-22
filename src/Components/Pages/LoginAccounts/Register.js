import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { toast } from "sonner";

const Register = () => {
  let userData = {};

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);

  let errorMessage;
  const navigate = useNavigate();

  if (error) {
    errorMessage = (
      <p className="font-bold text-red-500">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (loading || sending || updating) {
    return <Loading />;
  }

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    userData = {
      name: name,
      email: email,
    };
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(email, password, name);
    await fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/users/store-user",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    ).then((res) => res.json());
  };

  if (user) {
    navigate("/");
    sendEmailVerification();
    toast.success("Registration Successful! Check your email for verification.");
  }

  return (
    <div className="w-full h-[calc(100vh_-_115px)] bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-gray-950 flex items-center justify-center">
      <div className="w-11/12 xl:w-[460px] bg-white shadow-2xl rounded-lg p-8 relative z-[999]">
        <form
          onSubmit={handleCreateAccount}
          className="flex flex-col space-y-4"
        >
          <img
            className="w-24 mx-auto"
            src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
            alt="Logo"
          />
          <h2 className="text-2xl font-extrabold text-center text-gray-800">
            Register New Account
          </h2>
          <p className="text-sm text-gray-600 text-center mb-4">
            Fill in the details below to create your account.
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-600 transition"
          >
            Create Account
          </button>

          <div className="text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-teal-500 font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </form>
      </div>

      {/* Sharp Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,149.3L1440,139.3V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Register;
