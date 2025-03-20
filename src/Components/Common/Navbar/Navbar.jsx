import { useState } from "react";
import { FaUnlock, FaUser, FaBars, FaTimes, FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Top Navbar */}
            <nav className=" p-4 shadow-md">
                <div className="container max-w-[1200px] mx-auto flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <img src="https://i.ibb.co.com/bqcGCWG/logo-removebg-preview.png" alt="logo" className="w-10" />
                        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">Job Nest</h1>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Right Side Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="flex items-center text-gray-700 hover:text-orange-600">
                            <FaUser className="mr-1" /> Login
                        </Link>
                        <Link to="/register" className="flex items-center text-gray-700 hover:text-orange-600">
                            <FaUnlock className="mr-1" /> Signup
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Bottom Navbar */}
            <nav className="bg-gray-100 shadow-md w-full">
                <div className="container max-w-[1200px] mx-auto xl:px-0 px-2 md:py-3 py-0 flex items-center justify-between">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/jobs", label: "Jobs" },
                            { path: "/employers", label: "Employers" },
                            { path: "/candidates", label: "Candidates" },
                            { path: "/packages", label: "Packages" },
                            { path: "/pages", label: "Pages" }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-600 hover:text-orange-500"}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                    
                    <NavLink to="/post-job" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600 hidden md:flex">
                        <FaPlus /> Post New Job
                    </NavLink>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" onClick={toggleMenu}></div>
            )}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 p-5`}> 
                <button className="absolute top-4 right-4 text-gray-700" onClick={toggleMenu}>
                    <FaTimes size={24} />
                </button>
                <div className="flex flex-col space-y-4 mt-10">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/jobs", label: "Jobs" },
                        { path: "/employers", label: "Employers" },
                        { path: "/candidates", label: "Candidates" },
                        { path: "/packages", label: "Packages" },
                        { path: "/pages", label: "Pages" }
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-600 hover:text-orange-500"}
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    
                    {/* Login, Signup, and Post Job in Sidebar */}
                    <Link to="/login" className="flex items-center text-gray-700 hover:text-orange-600" onClick={toggleMenu}>
                        <FaUser className="mr-2" /> Login
                    </Link>
                    <Link to="/register" className="flex items-center text-gray-700 hover:text-orange-600" onClick={toggleMenu}>
                        <FaUnlock className="mr-2" /> Signup
                    </Link>
                    <NavLink to="/post-job" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600 mt-4" onClick={toggleMenu}>
                        <FaPlus /> Post New Job
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
