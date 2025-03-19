import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaArrowRight, FaFileImage } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-100 ">
                <div className="bg-white p-6  ">
                    <h2 className="text-3xl font-bold text-orange-500 text-center">Register</h2>
                    <p className="text-gray-600 text-center mb-8 mt-4">
                        Discover the latest in job with Job Nest. Your go-to source for insights, trends, and internships.
                    </p>
                    <form className="space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-4 text-gray-400" />
                            <input type="text" placeholder="Your Full Name" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                        </div>
                        <div className="relative">
                            <FaFileImage className="absolute left-3 top-4 text-gray-400" />
                            <input type="text" placeholder="Photo URL" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                            <input type="email" placeholder="Your Email Address" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                        </div>
                        <div className="relative pb-4">
                            <FaLock className="absolute left-3 top-4 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full p-3 pl-10 pr-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-4 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>


                        <button className="w-full flex items-center gap-2 justify-center bg-orange-500 text-white py-3  font-semibold hover:bg-orange-600 transition duration-300">
                            Create Account <FaArrowRight />
                        </button>
                    </form>
                    <div className="text-center my-4">OR</div>
                    <div className="flex justify-center space-x-4">
                        <button className="flex items-center justify-center w-full py-3 border border-gray-300  shadow-md hover:bg-orange-200 transition duration-200">
                            <FcGoogle className="text-xl mr-2" />
                            <span className="text-gray-700 font-medium">Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;