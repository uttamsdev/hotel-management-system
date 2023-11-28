import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
      const navigate = useNavigate();
      let userData = {}
      const from = location?.state?.from?.pathname || '/';
    let errorMessage;
    if (error) {
        (
            errorMessage = <p className='font-bold text-red-500 text-center mt-2'>Error: {error?.message}</p>
        )
      }
     
      if (loading) {
        return <Loading></Loading>
      }

      if(user){
         userData = {
          name: user.user.displayName,
          email: user.user.email
        }
        navigate(from, {replace: true}); // jekhan theke login korse se khane niye jabe
        fetch("http://localhost:5000/api/v1/users/store-user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }).then(res => res.json()).then(data => console.log(data))
        // console.log("user login: ",user?.user);
        // console.log("username: ",user.user.photoURL, user.user.displayName)
        
      }

  return (
    <div>
        {errorMessage}
        <div className='flex flex-col  mx-auto'>
            <button className='bg-orange-700  h-12 mt-4 text-white' onClick={()=>{signInWithGoogle()}}>Signin With Google</button> 
        </div>
    </div>
  )
}

export default SocialLogin;