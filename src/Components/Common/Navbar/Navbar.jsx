import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-white shadow-md w-full">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center text-3xl font-extrabold text-gray-800">
                        <img className="w-28" src="https://i.ibb.co.com/B2ZyMmZz/a-logo-with-a-creative-design-of-a-light-Jt-AKAfi8-Sw6d8ckpc-D9-G6-Q-2-St2-E8-Fe-Rrm-Qq-Ahzge21h-A-r.png" alt="Job Website Logo" />
                        <span className="ml-2">Job Nest</span>
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
                    <div className="hidden md:flex space-x-4">
                        <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600">Sign In</button>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600">Upload CV</button>
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
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md p-4 space-y-2 text-center">
                        <NavLink to="/" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Home</NavLink>
                        <NavLink to="/jobs" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Jobs</NavLink>
                        <NavLink to="/candidates" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Candidates</NavLink>
                        <NavLink to="/employers" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Employers</NavLink>
                        <NavLink to="/pages" className={({ isActive }) => isActive ? "block py-2 text-amber-500 font-medium" : "block py-2 text-gray-700 font-medium hover:text-amber-500"}>Pages</NavLink>
                        <button className="w-full bg-amber-500 text-white py-2 rounded-full font-medium hover:bg-amber-600">Sign In</button>
                        <button className="w-full bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 mt-2">Upload CV</button>
                    </div>
                )}
            </nav>

        </div>
    );
};

export default Navbar;