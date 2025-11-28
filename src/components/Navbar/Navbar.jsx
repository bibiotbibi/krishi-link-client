import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { div } from 'framer-motion/client';


const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allcrops">All Crops</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addcrops">Add crops</NavLink></li>
                <li><NavLink to="/myposts">My posts</NavLink></li>
                <li><NavLink to="/myinterests">My interests</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content  rounded-box z-1  w-52 p-2 shadow  bg-secondary">
                        {links}
                    </ul>
                </div>
                <div>

                    <Link to='/' className='flex justify-center'
                       >
                        <img className=' w-10 h-13' src="https://i.ibb.co.com/3mshTGkY/Scarica-Vettori-Immagini-Foto-e-Video-Gratuiti-1-removebg-preview.png" alt="" />
                        <a className=" text-xl font-bold mt-3">Krishi Link</a>
                    </Link>


                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <a onClick={handleSignOut} className="bg-primary btn text-white" >Log Out</a>
                        :
                        
                        <div>

                            <NavLink className="bg-primary btn text-white" to="/login">Login</NavLink>
                            <NavLink className="bg-primary btn text-white" to="/register">Register</NavLink>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;