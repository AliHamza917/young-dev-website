import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Login now!</h1>
                <p className="text-gray-600 text-center mb-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            placeholder="Password"
                            required
                        />
                        <div className="mt-1 text-right">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot password?</a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                        >
                            Login
                        </button>
                        <div className='py-2 text-md text-center font-bold w-full '>
                            <Link to='/registration-page'>Register Here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
