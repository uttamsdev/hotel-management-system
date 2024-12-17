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

  //for creating account
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  //for send email verification
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
    return <Loading></Loading>;
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
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  if (user) {
    navigate("/");
    sendEmailVerification();
    toast.success("Registration Successful Check Email for Verify");
  }
  //   sendEmailVerification();
  return (
    <div className="w-full h-[calc(100vh_-_115px)] bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 flex items-center justify-center">
      <div className="w-11/12 xl:w-[460px] bg-white shadow-2xl rounded-lg p-8">
        <form
          onSubmit={handleCreateAccount}
          className="flex flex-col space-y-4"
        >
          <img
            className="w-24 mx-auto"
            src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
            alt="Logo"
          />
          <h2 className="text-2xl font-bold text-center text-gray-800">
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
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
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
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
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
              className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>

          <div className="text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-800 font-medium">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
