


import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    function handleRegister(e){
        e.preventDefault()
        const name = e.target.displayName.value
        const photoUrl = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then((result) => {
            // console.log(result.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }



    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Display Name</label>
                        <input type="text" name="displayName" className="w-full px-4 py-2 border rounded-lg " placeholder="Enter your name" required/>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Photo URL</label>
                        <input type="text" name="photoUrl" className="w-full px-4 py-2 border rounded-lg" placeholder="https://example.com/photo.jpg" required/>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg" placeholder="you@example.com" required/>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" required/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account? <Link to="/auth/login" className="text-indigo-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
