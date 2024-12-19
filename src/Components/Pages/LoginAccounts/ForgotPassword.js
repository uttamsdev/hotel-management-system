import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  let errorMessage;

  if (error) {
    errorMessage = (
      <p className="font-bold text-red-500">Error: {error?.message}</p>
    );
  }
  if (sending) {
    return <Loading />;
  }

  const handleResetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success(`Password reset success`, {
        description: "A reset password link sent to your email",
      });
    }
  };

  return (
    <div className="w-full h-[calc(100vh_-_115px)] bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center">
      <div className="">
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col w-11/12 xl:w-[460px] mx-auto bg-white shadow-2xl rounded-lg p-8"
        >
          <img
            className="w-24 mx-auto"
            src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
            alt="Logo"
          />
          <p className="text-2xl font-extrabold text-gray-900 text-center mb-2">
            Reset Your Password
          </p>
          <p className="p-2 mb-2 text-gray-700">
            To reset your password, please enter your email and click the button below.
          </p>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              className="bg-gray-100 h-12 mb-2 w-full px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          {errorMessage}
          <button
            className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-600 transition mt-2"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>

      {/* Sharp Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260" className="w-full">
          <path
            fill="#ffffff"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,149.3L1440,139.3V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ForgotPassword;
