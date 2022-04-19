import React from 'react';
import google from './../../../Images/images.png';


import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error) {
        return (
            errorElement=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      if(user){
         navigate('/home')
      }
      
    return (
        <div>
            <div className='d-flex align-items-center   '>
           <div style={{height:'1px'}} className='bg-primary w-50'></div> 
           <p className='p-3 mb-1'>or</p>
           <div style={{height:'1px'}} className='bg-primary w-50'></div> 
          
        </div>
        {errorElement}
        <div>
         <button onClick={()=>signInWithGoogle()
             
         }
         className='btn-black rounded w-50 mt-4 align-items-center mx-auto d-block'>
            <img style={{width:'40px'}} src={google} alt="" />
            <span className='px-1 fw-bold'> Google SignIn</span>
             </button>
          </div>
          <div>
        
          </div>
         
        </div>
    );
};

export default SocialLogin;