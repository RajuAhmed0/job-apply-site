import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [authDropdown, setAuthDropdown] = useState(false);

    return (
        <div>
            <nav className="shadow-md">
                <div className="container max-w-[1200px] mx-auto py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center lg:text-3xl md:text-2xl text-3xl font-extrabold text-gray-800">
                        <span className="xl:ml-0 ml-2 text-orange-400">Job Nest</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-500" : "hover:text-amber-500"}>Home</NavLink>
                        <NavLink to="/jobs" className={({ isActive }) => isActive ? "text-amber-500" : "hover:text-amber-500"}>Jobs</NavLink>
                        <NavLink to="/candidates" className={({ isActive }) => isActive ? "text-amber-500" : "hover:text-amber-500"}>Candidates</NavLink>
                        <NavLink to="/employers" className={({ isActive }) => isActive ? "text-amber-500" : "hover:text-amber-500"}>Employers</NavLink>
                        <NavLink to="/pages" className={({ isActive }) => isActive ? "text-amber-500" : "hover:text-amber-500"}>Pages</NavLink>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex space-x-4 relative xl:mr-0 mr-2">
                        <div className="relative">
                            <button
                                onClick={() => setAuthDropdown(!authDropdown)}
                                className="bg-orange-400 text-white lg:px-6 md:px-2 py-2 rounded-full font-medium hover:bg-orange-500 flex items-center space-x-2 relative transition-all duration-300"
                            >
                                <span>Sign In</span>
                                <ChevronDown size={18} className={`transition-transform ${authDropdown ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            {authDropdown && (
                                <div className="absolute right-0 mt-2 bg-white shadow-xl  w-32 text-gray-700 border border-gray-200 overflow-hidden transition-all duration-300 z-10">
                                    <NavLink to="/login" className="block px-4 py-3 hover:bg-amber-100 transition-all" onClick={() => setAuthDropdown(false)}>Login</NavLink>
                                    <NavLink to="/register" className="block px-4 py-3 hover:bg-amber-100 transition-all" onClick={() => setAuthDropdown(false)}>Register</NavLink>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-white shadow-md p-4 space-y-2 transition-transform duration-500 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                    style={{ position: 'absolute', left: 0, width: '200px', height: '100%', zIndex: 100 }}
                >
                    <NavLink to="/" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Home</NavLink>
                    <NavLink to="/jobs" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Jobs</NavLink>
                    <NavLink to="/candidates" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Candidates</NavLink>
                    <NavLink to="/employers" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Employers</NavLink>
                    <NavLink to="/pages" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Pages</NavLink>

                    {/* Mobile Sign In Dropdown */}
                    <div className="relative">
                        <button onClick={() => setAuthDropdown(!authDropdown)} className="px-5 bg-orange-400 text-white py-2 rounded-full font-medium hover:bg-orange-500 flex items-center justify-center space-x-2 transition-all duration-300">
                            <span>Sign In</span>
                            <ChevronDown size={18} className={`transition-transform ${authDropdown ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {authDropdown && (
                            <div className="bg-white shadow-md mt-2 w-32 text-gray-700 overflow-hidden transition-all duration-300 z-10">
                                <NavLink to="/login" className="block px-4 py-3 hover:bg-amber-100 transition-all" onClick={() => setAuthDropdown(false)}>Login</NavLink>
                                <NavLink to="/register" className="block px-4 py-3 hover:bg-amber-100 transition-all" onClick={() => setAuthDropdown(false)}>Register</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;