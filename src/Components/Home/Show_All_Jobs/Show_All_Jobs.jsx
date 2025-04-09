import { Briefcase } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaEye, FaMoneyBillWave } from 'react-icons/fa';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Show_All_Jobs = () => {
    const [jobsData, setJobsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [min, setMin] = useState(10000);
    const [max, setMax] = useState(200000);
    const [showSectors, setShowSectors] = useState(true);
    const [showDatePosted, setShowDatePosted] = useState(true);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch('http://localhost:4000/allJobs')
            .then(res => res.json())
            .then(data => setJobsData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const filteredJobs = jobsData
        .filter((job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((job) => {
            const salary = typeof job.salaryRange === 'object'
                ? job.salaryRange.min
                : parseInt(job.salaryRange?.replace(/[^\d]/g, '')) || 0;
            return salary >= min && salary <= max;
        })
        .filter((job) => {
            return selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);
        });

    return (
        <div className='mb-9'>
            <div className="text-center py-10 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    Featured Jobs
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                    Find the job that’s perfect for you. About 200+ new jobs every day
                </p>
            </div>

            <div className="mb-3 flex max-w-[1200px] xl:mx-auto mx-1 flex-col sm:flex-row items-start sm:items-center justify-between p-2 border shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-2 sm:mb-0">All Jobs</h2>
                <div className="w-full sm:w-1/3">
                    <label className="input border-none flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-4 max-w-[1200px] xl:mx-auto mx-1'>
                <div className="max-w-sm bg-white p-4 shadow-md space-y-6">
                    {/* Job Type */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowSectors(!showSectors)}>
                            <h2 className="text-sm font-bold text-orange-500 uppercase">Job Type</h2>
                            <span className="text-orange-500">
                                {showSectors ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        </div>
                        <div className={`transition-all duration-300 overflow-hidden ${showSectors ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-1`}>
                            {["Full-Time", "Part-Time", "Hybrid"].map((type) => (
                                <div key={type} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedJobTypes.includes(type)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedJobTypes(prev => [...prev, type]);
                                            } else {
                                                setSelectedJobTypes(prev => prev.filter(item => item !== type));
                                            }
                                        }}
                                    />
                                    <label className="text-sm text-gray-700">{type}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Level (unchanged, not wired yet) */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowDatePosted(!showDatePosted)}>
                            <h2 className="text-sm font-bold text-orange-500 uppercase">Experience Level</h2>
                            <span className="text-orange-500">
                                {showDatePosted ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </span>
                        </div>
                        <div className={`transition-all duration-300 overflow-hidden ${showDatePosted ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-1`}>
                            {["Senior", "Internship", "Entry", "Mid Level", "Junior"].map((level) => (
                                <div key={level} className="flex items-center">
                                    <input type="checkbox" className="mr-2 " />
                                    <label className="text-sm text-gray-700">{level}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Salary Filter (unchanged) */}
                    <div>
                        <h2 className="text-lg text-orange-500 font-semibold mb-4">Price Range</h2>
                        <div className="relative w-full h-6 mb-4">
                            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 transform -translate-y-1/2 rounded" />
                            <div
                                className="absolute top-1/2 h-2 rounded bg-orange-400"
                                style={{
                                    left: `${((min - 10000) / (200000 - 10000)) * 100}%`,
                                    width: `${((max - min) / (200000 - 10000)) * 100}%`,
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <input
                                type="range"
                                min="10000"
                                max="200000"
                                value={min}
                                onChange={(e) => setMin(Number(e.target.value))}
                                className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none"
                                style={{ zIndex: 10 }}
                            />
                            <input
                                type="range"
                                min="10000"
                                max="200000"
                                value={max}
                                onChange={(e) => setMax(Number(e.target.value))}
                                className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none"
                                style={{ zIndex: 20 }}
                            />
                            <style>{`
                                input[type=range]::-webkit-slider-thumb {
                                    appearance: none;
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 9999px;
                                    background: white;
                                    border: 4px solid #f97316;
                                    cursor: pointer;
                                    pointer-events: auto;
                                    margin-top: -7px;
                                    position: relative;
                                    z-index: 30;
                                }
                                input[type=range]::-moz-range-thumb {
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 9999px;
                                    background: white;
                                    border: 4px solid #f97316;
                                    cursor: pointer;
                                    pointer-events: auto;
                                }
                            `}</style>
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                value={min.toLocaleString()}
                                readOnly
                                className="border border-gray-300 rounded p-2 w-24 text-center"
                            />
                            <input
                                type="text"
                                value={max.toLocaleString()}
                                readOnly
                                className="border border-gray-300 rounded p-2 w-24 text-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Job List */}
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 w-full ">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div key={index} className="w-full mx-auto border md:p-4 p-2 shadow-sm bg-white">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br flex items-center justify-center">
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
                                        <div className="text-gray-500 flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" /> {job.jobType}
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
                                    <Link to={`/jobs_details/${job._id}`}>
                                        <button className="flex items-center gap-1 hover:text-orange-500 text-sm">
                                            <FaEye /> View
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No jobs found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Show_All_Jobs;
