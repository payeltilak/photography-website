import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const navigateLogin = event => {

        navigate('/login')
    }
    if (user) {
       console.log('user',user);
    }

    const handleRegister =async( event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName :name });
          alert('Updated profile');
          navigate('/home');
    }
    return (
        <div className='register-form mx-auto w-50'>
            <h2 className='text-center fw-bold'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />

                <input className='btn-dark mt-2' type="submit" value="Register" />
            </Form>
            <p className='text-center'>Already have an account?<Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateLogin} >Please Login</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;
