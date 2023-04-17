import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocailLoginBtn from "./SocailLoginBtn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase/firebase.config";


export default function Register() {
    const auth = getAuth(app)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [control , setControl] = useState(false)

    const handleRegister = (event) => {

       
        // if(!/^([a-z])([A-Z])(\d)$/.test(password)){
        //     console.log('thik ace boss')
        // }else{
        //     setError('thik nai boss')
        // }
        event.preventDefault()
        if (email ) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    // ..
                });
        } else {
            setError('bro hobe na email and password lagbe');
        }

    }
    console.log(email, password)
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </a>
                </div>
                <p className="text-red-500 text-xl font-semibold">{error}</p>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="password-container">
                                { control ? <div className="flex flex-col items-start">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="text"
                                        value={password}
                                        name="password"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div> 
                                :
                                <div className="flex flex-col items-start">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>}
                                <button onClick={()=>setControl(!control)}>Show Password</button>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button onClick={handleRegister} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link className="text-purple-600 hover:underline" to='/login'>
                                Log in
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <SocailLoginBtn></SocailLoginBtn>
                </div>
            </div>
        </div>
    );
}