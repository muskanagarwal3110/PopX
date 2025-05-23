import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const hasText = email.length > 0;
    const hasPassword = password.length > 0;
    const handleLogin=(e)=>{
        e.preventDefault();
        const userData= JSON.parse(localStorage.getItem('signupData'))
        if(email === userData.email && password=== userData.password){
            navigate('/dashboard');
        }
        else if(email===userData.email && password!= userData.password){
            alert('invalid password')
        }
        else if(email!=userData.email){
            alert('user not registered');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleLogin} className="w-96 h-[85vh] p-9 bg-white shadow rounded-lg flex flex-col justify-start items-start">
                <h1 className="text-3xl font-semibold text-left mb-3">Signin to your<br /> PopX account</h1>
                <p className='text-gray-600 text-left mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="relative w-full mb-3">
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer w-full px-2 pt-4 pb-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 bg-white placeholder-transparent"
                        placeholder="Enter email address"
                    />
                    <label
                        htmlFor="email"
                        className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasText || document.activeElement.id === 'email'
                                ? '-top-2.5 text-s'
                                : 'top-3'
                            }`}
                    >
                        Email Address
                    </label>
                </div>
                <div className="relative w-full mb-3">
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer w-full px-2 pt-4 pb-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 bg-white placeholder-transparent"
                        placeholder="Enter password"
                    />
                    <label
                        htmlFor="password"
                        className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasPassword || document.activeElement.id === 'password'
                                ? '-top-2.5 text-s'
                                : 'top-3'
                            }`}
                    >
                        Password
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-400 text-white font-semibold py-2 rounded hover:bg-purple-600"
                >Login</button>
            </form>


        </div>
    );
}
export default Login;