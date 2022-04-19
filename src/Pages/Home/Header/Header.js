import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ContactUs from '../../Contact Us/ContactUs';


const Header = () => {

    const [user] = useAuthState(auth);
    const handleLogOut=()=>{
       signOut(auth);
    }
    return (
        <header className='mt-4 mb-4'>
            <nav>
                <Link className='text-decoration-none fw-bold p-2' to='/home'>Home</Link>

                {
                    user?
                   <Button onClick={handleLogOut}>LogOut</Button>
                    :
                    <Link className='text-decoration-none fw-bold p-2' to='/login'>Login</Link>

                }

                <Link className='text-decoration-none fw-bold p-2' to='/about'>About</Link>

                <Link className='text-decoration-none fw-bold p-2' to='/blogs'>Blogs</Link>
               

            </nav>



        </header>
    );
};

export default Header;