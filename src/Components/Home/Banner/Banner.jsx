import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <div className="relative max-w-full mx-auto flex items-center justify-center text-center">
                {/* Background Image using <img> */}
                <img
                    src="https://i.ibb.co.com/5Xx3vDRh/job-5382501-1920.jpg"
                    alt="Job Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Overlay & Content */}
                <div className="relative bg-black bg-opacity-50 py-16 sm:py-24 md:py-32 lg:py-48 w-full">
                    <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        2,568 jobs available
                    </h2>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mt-2">
                        You can choose your dream job
                    </h1>
                    <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg lg:text-xl">
                        Find a great job to build your bright career. There are many jobs on this platform.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Banner;