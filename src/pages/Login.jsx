

import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    function handleLogin(e){
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value


        loginUser(email, password)
        .then((result) => {
            navigate(location.state || "/")
            // console.log(result.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }




    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1" htmlFor="email">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1" htmlFor="password">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Don't have an account? <Link to="/auth/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
