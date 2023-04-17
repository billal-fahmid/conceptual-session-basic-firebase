import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='gap-3 flex text-center justify-center text-orange-500 font-bold bg-black py-3'>
                <Link  to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                {/* <Link>Home</Link> */}
            </nav>
        </div>
    );
};

export default Header;