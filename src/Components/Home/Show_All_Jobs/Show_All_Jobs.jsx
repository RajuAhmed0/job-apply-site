
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaEye, FaMoneyBillWave } from 'react-icons/fa';


const Show_All_Jobs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [jobsData, setJobsData] = useState([]);
    console.log(jobsData);

    useEffect(() => {
        fetch('http://localhost:4000/allJobs')
            .then(res => res.json())
            .then(data => setJobsData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='mb-9'>
            <div className="text-center py-10 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    Featured Jobs
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                    Find the job that’s perfect for you. About 200+ new jobs every day
                </p>
            </div>
            <div className="mb-3 flex max-w-[1200px] xl:mx-auto mx-1 flex-col sm:flex-row items-start sm:items-center justify-between p-2 border  shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-2 sm:mb-0">All Jobs</h2>
                <div className="w-full sm:w-1/3">
                    <label className="input border-none  flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-[1200px] xl:mx-auto mx-1">
                {jobsData.map((job, index) => (
                    <div key={index} className="w-full mx-auto border md:p-4 p-2 shadow-sm bg-white">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br  flex items-center justify-center">
                                <img src={job.company_logo} alt="" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-orange-500 flex items-center gap-1">
                                    {job.title}
                                </h2>
                                <h3 className="text-sm text-gray-800 font-semibold">
                                    {job.category}
                                </h3>
                                <div className="text-gray-500 lg:text-sm text-[10px] flex items-center gap-1 mt-1">
                                    <FaMapMarkerAlt />
                                    {job.location}
                                    <span className="flex items-center gap-1 ml-4">
                                        <FaCalendarAlt />
                                        {job.applicationDeadline}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='border-t mt-6'></div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="text-gray-600 font-semibold flex items-center gap-1">
                                <FaMoneyBillWave />
                                {typeof job.salaryRange === 'object'
                                    ? `${job.salaryRange.min} – ${job.salaryRange.max}`
                                    : job.salaryRange || 'Negotiable'}
                            </div>
                            <button className="flex items-center gap-1 hover:text-orange-500 text-sm">
                                <FaEye /> View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
};

export default Show_All_Jobs;