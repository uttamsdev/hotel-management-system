import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
      const navigate = useNavigate();
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
        navigate(from, {replace: true}); // jekhan theke login korse se khane niye jabe
        console.log("user login: ",user?.user);
        console.log("username: ",user.user.photoURL, user.user.displayName)
        
      }
    
  return (
    <div>
        {errorMessage}
        <div className='flex flex-col  mx-auto'>
            <button className='bg-orange-700  h-12 mt-4 text-white' onClick={() => signInWithGoogle()}>Signin With Google</button> 
        </div>
    </div>
  )
}

export default SocialLogin;