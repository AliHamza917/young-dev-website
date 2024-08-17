import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import {useCookies} from "react-cookie";

const LoginPage = () => {

    const location = useLocation();
    const [inputs, setInputs] = useState({});
    const [cookies, setCookie] = useCookies(['Token'])
    const navigate = useNavigate();


    const handleInput = (event) => {
        const { name, value } = event.target;

        setInputs((prevInput) => ({ ...prevInput, [name]: value }));

    };
    const handleSubmit =async (event)=>{
        event.preventDefault();
        try{

                const response = await axios.post("http://localhost:5000/api/auth/login" , inputs,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                toast.success("User Login SuccessFully")
                setCookie('Token', response.data.token, { path: '/' })
                navigate('/dashboard-page' ,{ state: { message: "User Login Successfully" } })
                console.log(response.data.message)

        }catch (err){
            toast.error("Please Check Email or Password")
            console.log(err)
        }


    }


    // Registration Successful Toast Handle Function

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success(location.state.message);
            navigate(location.pathname, { replace: true });

        }
    }, [location.state , navigate]);


    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Login now!</h1>
                <ToastContainer />
                <p className="text-gray-600 text-center mb-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name = "email"
                            value={inputs.email || ''}
                            onChange={handleInput}
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
                            name = "password"
                            value={inputs.password || ''}
                            onChange={handleInput}
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
