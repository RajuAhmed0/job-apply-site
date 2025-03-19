import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-orange-50  py-10 px-5 ">
            <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-orange-400">Job Nest</h2>
                    <p className="mt-2 text-sm">
                        Job Nest jobs aims to be the largest professional networking and job matching platform for the rising force in Bangladesh.
                    </p>
                    <h3 className="mt-4 font-semibold">Download Job Nest App</h3>
                    <button className="mt-2  rounded-md">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
                    </button>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Company</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li>About Us</li>
                        <li>Impactful Insights</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Services</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li>Job Posting (Subscription Plans)</li>
                        <li>Recruitment Process Outsourcing / Headhunting</li>
                        <li>Staffing Solution / Payroll Solution</li>
                        <li>Corporate Training & Development</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Get In Touch</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-center"><FaPhoneAlt className="mr-2" /> +880 9638-885588</li>
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> info@Job Nest.com</li>
                        <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Job Nest Technologies Ltd. Baridhara DOHS, Dhaka</li>
                    </ul>
                    <h3 className="mt-4 font-semibold">Follow Us:</h3>
                    <div className="flex space-x-3 mt-2 text-2xl">
                        <FaFacebook className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                        <FaTiktok className="cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className=" mt-10 border-t border-gray-700 pt-4 text-center  text-xs text-gray-500">
            
                <span>Copyright © 2024 All Rights Reserved by Job Nest</span>
        
            </div>
        </footer>
    );
};

export default Footer;
