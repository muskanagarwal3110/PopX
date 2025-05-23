import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [isAgency, setIsAgency] = useState('');
    const hasText = name.length > 0;
    const hasPassword = password.length > 0;
    const hasPhone = phone.length > 0;
    const hasEmail = email.length > 0;
    const hasCompany = company.length > 0;
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            password,
            company,
            isAgency
        };

        localStorage.setItem('signupData', JSON.stringify(formData));
        console.log('Saved to localStorage:', formData);
        navigate('/dashboard');
    };


    const isFormComplete = name && password && phone && email && company && isAgency
    return (
        <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center">
            <div className="w-96 h-[85vh] p-9 bg-white shadow rounded-lg flex flex-col justify-between ">
                <div>
                    <h1 className="text-3xl font-semibold text-left mb-3">Create your<br /> PopX account</h1>
                    <div className="relative w-full mb-3">
                        <input
                            type="name"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="peer w-full px-2 pt-4 pb-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 bg-white placeholder-transparent"
                            placeholder="Enter Full Name"
                        />
                        <label
                            htmlFor="name"
                            className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasText || document.activeElement.id === 'name'
                                ? '-top-2.5 text-s'
                                : 'top-3'
                                }`}
                        >
                            Full Name<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className='relative w-full mb-3'>
                        <input
                            type="phone"
                            id="phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="peer w-full px-2 pt-4 pb-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 bg-white placeholder-transparent"
                            placeholder="Enter phone number"
                        />
                        <label
                            htmlFor='phone'
                            className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasPhone || document.activeElement.id === 'phone'
                                ? '-top-2.5 text-s '
                                : 'top-3 '
                                }`}
                        >
                            Phone number<span className='text-red-500'>*</span>
                        </label>
                    </div>
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
                            className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasEmail || document.activeElement.id === 'email'
                                ? '-top-2.5 text-s'
                                : 'top-3'
                                }`}
                        >
                            Email Address<span className="text-red-500">*</span>
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
                                ? '-top-2.5 text-s '
                                : 'top-3 '
                                }`}
                        >
                            Password<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className='relative w-full mb-3'>
                        <input
                            type='company'
                            id='company'
                            value={company}
                            required
                            onChange={(e) => setCompany(e.target.value)}
                            className="peer w-full px-2 pt-4 pb-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 bg-white placeholder-transparent"
                            placeholder="Enter company name"
                        />
                        <label
                            htmlFor='company'
                            className={`absolute left-3 text-md text-purple-600 bg-white px-1 transition-all duration-200 ${hasCompany || document.activeElement.id === 'company'
                                ? '-top-2.5 text-s '
                                : 'top-3 '
                                }`}
                        >
                            Company name<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="space-y-2 flex flex-col items-start">
                        <label className="block font-medium text-gray-900">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center space-x-6">
                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={isAgency === 'yes'}
                                    onChange={() => setIsAgency('yes')}
                                    className="peer hidden"
                                />
                                <span className="w-5 h-5 rounded-full border-2 border-purple-500 peer-checked:border-[6px] peer-checked:border-purple-600"></span>
                                <span className="text-gray-900">Yes</span>
                            </label>

                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={isAgency === 'no'}
                                    onChange={() => setIsAgency('no')}
                                    className="peer hidden"
                                />
                                <span className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-[6px] peer-checked:border-purple-600"></span>
                                <span className="text-gray-900">No</span>
                            </label>
                        </div>
                    </div>

                </div>

                <div>
                    <button
                        type="submit"
                        className={`w-full text-white font-semibold py-2 rounded ${isFormComplete ? 'bg-purple-600' : 'bg-gray-400 cursor-not-allowed'}`}
                    >Create Account</button>
                </div>

            </div>

        </form>
    );
}
export default Signup;