import React from 'react';
import { motion } from "framer-motion";

const AnimationImg = () => {
    return (
        <div>
         
            <div className="relative flex justify-center items-center h-screen overflow-hidden">
                {/* Back Image */}
                <motion.img
                    src="https://i.ibb.co.com/nq2hRfyQ/developer-1.jpg"
                    alt="Background Image"
                    className="absolute max-w-full w-2/4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-r-xl rounded-bl-xl shadow-lg top-0 left-11"
                    animate={{ y: 100, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Front Image */}
                <motion.img
                    src="https://i.ibb.co.com/Dg6LmGwZ/devoloper-2.jpg"
                    alt="Foreground Image"
                    className="relative max-w-full w-2/4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-r-xl rounded-bl-xl shadow-xl top-28"
                    animate={{ x: -100, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>


        </div>
    );
};

export default AnimationImg;