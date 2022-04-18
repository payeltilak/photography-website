import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='mt-4 mb-4'>
            <nav>
                <Link className='text-decoration-none fw-bold p-2' to='/home'>Home</Link>


                <Link className='text-decoration-none fw-bold p-2' to='/about'>About</Link>
                <Link className='text-decoration-none fw-bold p-2' to='/login'>Login</Link>

            </nav>



        </header>
    );
};

export default Header;