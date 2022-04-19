import React from 'react';
import google from './../../../Images/images.png';
import facebook from './../../../Images/facebook-logo-icon-voronezh-russia-january-blue-square-reflection-shadow-171161171.jpg';
import github from './../../../Images/download.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center   '>
           <div style={{height:'1px'}} className='bg-primary w-50'></div> 
           <p className='p-3 mb-1'>or</p>
           <div style={{height:'1px'}} className='bg-primary w-50'></div> 
          
        </div>
        <div>
         <button className='btn-primary rounded w-50 mt-4 align-items-center mx-auto d-block'>
            <img style={{width:'40px'}} src={google} alt="" />
            <span className='px-1'> Google SignIn</span>
             </button>
          </div>
          <div>
          <button className='btn-primary rounded w-50 mt-4 align-items-center mx-auto d-block'>
            <img style={{width:'40px'}} src={facebook} alt="" />
            <span className='px-1'> FaceBook SignIn</span>
             </button>
          </div>
          <button className='btn-primary rounded w-50 mt-4 align-items-center mx-auto d-block'>
            <img style={{width:'40px'}} src={github} alt="" />
            <span className='px-1'> GitHub SignIn</span>
             </button>
        </div>
    );
};

export default SocialLogin;