import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] =useState('');
    const handlrLogin = e =>{
        e.preventDefault();

        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setError('');

        signInWithEmailAndPassword(auth , email, password)
        .then(result=>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div>
            <div
                className="w-8/12 h-150  mx-auto relative border border-solid border-white/40 rounded-2xl overflow-hidden"
            >
                <img className='w-full h-full' src="https://i.ibb.co.com/ZbR9gc5/download.jpg" alt="" />
                <div className="w-full h-full  absolute bg-purple-400">
                    <div
                        className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"
                    ></div>
                </div>
                <div className="w-full h-full p-2 flex justify-between absolute inset-0">

                    <div
                        className="md:w-3/5 w-full  p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10
                         text-gray-200 font-medium font-mono"
                    >
                         <div className="card-body  flex flex-col justify-center">
                            <h1 className="text-5xl font-bold text-center text-[#b6f0ac] ">Login to Your Account</h1>
                           <form onSubmit={handlrLogin}>
                             <fieldset className="fieldset">
                                <label className="label text-white">Email</label>
                                <input type="email" className="input w-full text-black" name='email' placeholder="Email" />
                                <label className="label text-white">Password</label>
                                <input type="password" className="input w-full text-black" name='password' placeholder="Password" />
                                <div><a className="link link-hover text-gray-200">Forgot password?</a></div>
                               
                                <button className="button btn bg-primary text-amber-50 my-2">Login</button>
                                <p className='text-sm'>Do not have an account?  <Link className='text-amber-50 font-semibold link-hover' to="/register">Register</Link></p>
                            </fieldset>
                           </form>
                           {
                            error && <p className='text-red-400'>{error}</p>
                           }

                        </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;