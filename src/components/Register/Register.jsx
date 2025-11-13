import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    
  const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        console.log('register clicked', name, email, photo, password)


        if (!/[A-Z]/.test(password))
            return setError("Password must have at least one uppercase");
        if (!/[a-z]/.test(password))
            return setError("Password must have at least one lowercase");
        if (password.length < 6)
            return setError("Password must be at least 6 characters");

        setError("");


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('new user', result.user)
                alert("✅ Registration successful!");
        navigate("/");
            })
            .catch(error => {
                console.log(error)
                 if (error.code === "auth/email-already-in-use") setError("Email already exists");
        else setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                       
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())

                    .then(data => {
                        console.log('data after user save', data)
                        alert("✅ Google sign-in successful!");
        navigate("/");
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div
                className="w-8/12 h-150  mx-auto relative border border-solid border-white/40 rounded-2xl overflow-hidden"
            >
                <img className='w-full h-full ' src="https://i.ibb.co.com/ZbR9gc5/download.jpg" alt="" />
                <div className="w-full h-full  absolute bg-purple-400">
                    <div
                        className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"
                    ></div>
                </div>
                <div className="w-full h-full p-2 flex justify-between absolute inset-0">

                    <div
                        className="md:w-3/5 w-full  p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono"
                    >

                        <div className="card-body flex flex-col justify-center ">
                            <h1 className="text-5xl font-bold text-center text-[#b6f0ac] ">Register</h1>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label text-white">Name</label>
                                    <input type="text" className="input w-full text-black" name='name' placeholder="Your Name" required />
                                    <label className="label text-white">Email</label>
                                    <input type="email" className="input w-full text-black " name='email' placeholder="Email" required />
                                    <label className="label text-white">Photo</label>
                                    <input type="text" className="input w-full text-black" name='photo' placeholder="Photo" />
                                    <label className="label text-white">Password</label>
                                    <input type="password" className="input w-full text-black" name='password' placeholder="Password" required />
                                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                    <button className="button btn bg-primary text-amber-50 my-2">Register</button>

                                    <button onClick={handleGoogleSignIn} className="btn mb-2 button bg-primary text-amber-50 border-[#e5e5e5]">
                                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                        Login with Google
                                    </button>
                                    <p className='text-sm'>Alredy have an account?  <Link className='  text-amber-50 font-semibold link-hover ' to="/login">Login</Link></p>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                    <div className="h-full pt-2 flex flex-col items-end text-white/50">


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;