import { Briefcase } from 'lucide-react';
import React from 'react';
import { FaCalendarAlt, FaEye, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    return (
        <div className="w-full mx-auto border md:p-4 p-2 shadow-sm bg-white">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br flex items-center justify-center">
                    <img src={job?.company_logo} alt="" className="object-contain w-full h-full" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-orange-500 flex items-center gap-1">{job?.title}</h2>
                    <h3 className="text-sm text-gray-800 font-semibold">{job?.category}</h3>
                    <div className="text-gray-500 lg:text-sm text-[10px] flex items-center gap-1 mt-1">
                        <FaMapMarkerAlt />
                        {job?.location}
                        <span className="flex items-center gap-1 ml-4">
                            <FaCalendarAlt />
                            {job?.applicationDeadline}
                        </span>
                    </div>
                    <div className="text-gray-500 flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job?.jobType}
                    </div>
                </div>
            </div>
            <div className='border-t mt-6'></div>
            <div className="mt-4 flex justify-between items-center">
                <div className="text-gray-600 font-semibold flex items-center gap-1">
                    <FaMoneyBillWave />
                    {typeof job?.salaryRange === 'object'
                        ? `${job?.salaryRange.min} – ${job?.salaryRange.max}`
                        : job?.salaryRange || 'Negotiable'}
                </div>
                <Link to={`/jobs_details/${job?._id}`}>
                    <button className="flex items-center gap-1 hover:text-orange-500 text-sm">
                        <FaEye /> View
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;