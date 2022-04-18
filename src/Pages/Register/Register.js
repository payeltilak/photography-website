import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate=useNavigate();
    const navigateLogin=event=>{
        
       navigate('/login') 
    }
    const handleRegister=event=>{
        event.preventDefault();
        console.log(event.target);
    }
    return (
        <div className='register-form'>
            <h2 className='text-center fw-bold'>Please Register</h2>
            <Form>
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
