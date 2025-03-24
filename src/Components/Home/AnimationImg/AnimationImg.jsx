import React from 'react';
import { motion } from "framer-motion";

const AnimationImg = () => {
    return (
        <div>
            <div className="relative flex justify-center text-center items-center h-screen bg-gray-100 overflow-hidden">
                {/* Back Image */}
                <motion.img
                    src="https://i.ibb.co.com/nq2hRfyQ/developer-1.jpg"
                    alt="Background Image"
                    className="absolute max-w-lg w-2/4 rounded-r-xl rounded-bl-xl shadow-lg top-0 left-11 "
                    nitial={{ y: 200, opacity: 0 }}
                    animate={{ y: 100, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Front Image */}
                <motion.img
                    src="https://i.ibb.co.com/Dg6LmGwZ/devoloper-2.jpg"
                    alt="Foreground Image"
                    className="relative max-w-lg rounded-r-xl rounded-bl-xl shadow-xl top-28"
                    nitial={{ x: -150, opacity: 0 }}
                    animate={{ x: -100, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>
        </div>
    );
};

export default AnimationImg;