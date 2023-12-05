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
import swal from "sweetalert";

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
    await fetch("http://localhost:5000/api/v1/users/store-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  if (user) {
    navigate("/");
    sendEmailVerification();
    // alert("Verification email sent")
    swal(
      "Registration Successful Check Email for Verify",
      "Your account successfully created, Verify your email",
      "success"
    );
    console.log("user: ", user);
  }
  //   sendEmailVerification();
  return (
    <div>
      <div>
        <div className="w-full h-screen pt-32 bg-[#F9FAFB]">
          <div className="">
            <form
              onSubmit={handleCreateAccount}
              className="flex flex-col w-11/12 xl:w-[460px] mx-auto shadow-xl p-8"
            >
              <img
                className="w-24 mx-auto"
                src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
                alt=""
              />
              <p className="text-2xl font-bold text-center mb-2">
                Register New Account
              </p>
              <div>
                <p>Name:</p>
                <input
                  className="bg-[#e4e4e4ac] h-10 mb-2  outline-none w-full xl:w-[390px] pl-2 rounded"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <p>Email:</p>
                <input
                  className="bg-[#e4e4e4ac] h-10 mb-2  outline-none w-full xl:w-[390px] pl-2 rounded"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <p>Password:</p>
                <input
                  className="bg-[#e4e4e4ac] h-10 mb-2 w-full xl:w-[390px] pl-2 outline-none rounded"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
              <input
                className="bg-[#2563EB] text-white p-2 cursor-pointer mt-2 rounded"
                type="submit"
                value="Create Account"
              />
              <div>
                {errorMessage}
                <p className="text-gray-500 mt-2">
                  Already Have Account?{" "}
                  <Link className="text-blue-800" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div></div>
              <SocialLogin></SocialLogin>
            </form>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
        {/* <SocialLogin></SocialLogin> */}
      </div>
      {/* <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Register;
