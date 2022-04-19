
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    
    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(
        auth
      );
    if (user) {
        navigate('/home')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword=async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Updated profile');
    }


    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center text-primary'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to our web Photography?<Link to='/register' className='text-danger text-decoration-none pe-auto' onClick={navigateRegister} >Please Register</Link></p>

            <p>Forget password?<Link to='/register' className='text-danger text-decoration-none pe-auto' onClick={resetPassword} >Reset password</Link></p>
            

            <SocialLogin></SocialLogin>
        </div>
    );

};


export default Login;