
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaEye, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const All_Jobs = () => {
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

            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-[1200px] xl:mx-auto mx-1">
                {jobsData.slice(0, 6).map((job, index) => (
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
            <div className='text-center mt-6'>
                <Link to={"/showAllJobs"}><button className='hover:bg-orange-600  hover:text-white duration-500 px-10 py-2 font-bold border '>See All</button></Link>
            </div>

        </div>
    );
};

export default All_Jobs;
