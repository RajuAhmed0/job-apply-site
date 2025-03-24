import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaFileImage } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../Firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
import animationData from "../../../../public/sign up animation.json";
import Lottie from "lottie-react";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();



    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((userInfo) => {
                console.log("User created:", userInfo);
                toast.success("Account created successfully!", { position: "top-right" })
                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        console.log("Profile updated successfully");

                        navigate(location.state ? location.state : "/")
                    })
                    .catch((err) => {
                        console.error("Profile update error:", err);
                        toast.error("Profile update failed. Try again.", { position: "top-right" });
                    });

            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered!", { position: "top-right" });
                } else {
                    console.error("Registration error:", error);
                    toast.error("Registration failed. Please try again.", { position: "top-right" });
                }
            });
    };



    //  Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google Sign-In Success:", result.user);
                toast.success("Google Login Successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                toast.error("Google Sign-In Failed.");
            });
    };

    return (
        <div>
            <Toaster></Toaster>
            <div className="flex items-center justify-center bg-gray-100 gap-6">
                <div className="flex  ">
                    <div className=" p-6 my-12 max-w-lg ">
                        <h2 className="text-3xl font-bold text-orange-500 text-center">Register</h2>
                        <p className="text-gray-600 text-center mb-8 mt-4">
                            Discover the latest in job with Job Nest. Your go-to source for insights, trends, and internships.
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-4 text-gray-400" />
                                <input type="text"  {...register("name")} placeholder="Your Full Name" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                            </div>
                            <div className="relative">
                                <FaFileImage className="absolute left-3 top-4 text-gray-400" />
                                <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                            </div>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                                <input type="email" {...register("email")} placeholder="Your Email Address" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                            </div>
                            <div className="relative pb-4">
                                <FaLock className="absolute left-3 top-4 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
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


                            <button type="submit" className="w-full flex items-center gap-2 justify-center bg-orange-500 text-white py-3  font-semibold hover:bg-orange-600 transition duration-300">
                                Create Account <FaArrowRight />
                            </button>
                        </form>
                        <div className="text-center my-4">OR</div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full py-3 border border-gray-300  shadow-md hover:bg-orange-200 transition duration-200">
                                <FcGoogle className="text-xl mr-2" />
                                <span className="text-gray-700 font-medium">Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 md:block hidden">
                    <Lottie animationData={animationData}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Register;