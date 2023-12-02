import React from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import swal from 'sweetalert';
import Loading from '../Shared/Loading';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    let errorMessage;

    if (error) {
        (
            errorMessage = <p className='font-bold text-red-500'>Error: {error?.message}</p>
        )
      }
      if (sending) {
        return <Loading></Loading>
      }

    const handleResetPassword = async(event)=> {
        event.preventDefault();
        const email = event.target.email.value;
        const success = await sendPasswordResetEmail(email);
        if(success){
            swal("Password Reset Email Sent", "Check you email and reset password.", "success");
        }

    }
  return (
    <div>
      <div className="w-full h-screen pt-32 bg-[#F9FAFB]">
        <div className="">
          <form onSubmit={handleResetPassword}
            
            className="flex flex-col  w-11/12 xl:w-[460px] mx-auto shadow-xl p-8"
          >
            <img
              className="w-24 mx-auto"
              src="http://www.hotels.gov.bd/forntend/img/core-img/logo.png"
              alt=""
            />
            <p className="text-2xl font-bold text-center mb-2">
              Reset  Your Password
            </p>
            <p className='p-2 mb-2 text-gray-700'>To reset password please enter your email and click on reset password button to proceed password reset</p>
            <div>
              <p className="">Email:</p>
              <input
                className="bg-[#e4e4e4ac] h-10 mb-2  outline-none w-full xl:w-[390px] pl-2 rounded"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </div>
            {errorMessage}
            <input
              className="bg-[#2563EB] text-white p-2 cursor-pointer mt-2 rounded"
              type="submit"
              value="Reset Password"
            />
          </form>
        </div>
      </div>
      {/* <SocialLogin></SocialLogin> */}
    </div>
  )
}

export default ForgotPassword;