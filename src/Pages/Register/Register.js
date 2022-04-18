import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      

    const navigate=useNavigate();
    const navigateLogin=event=>{
        
       navigate('/login') 
    }
    if(user){
        navigate('/home')
    }
    
    const handleRegister=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form'>
            <h2 className='text-center fw-bold'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required/>
                <input type="submit" value="Register" />
            </Form>
            <p className='text-center'>Already have an account?<Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateLogin} >Please Login</Link></p>
             
        </div>
    );
};

export default Register;
