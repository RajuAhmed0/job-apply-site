
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../Show_All_Jobs/JobCard';
const All_Jobs = () => {
    const [jobsData, setJobsData] = useState([]);
    // console.log(jobsData);

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
                {jobsData.slice(0, 6).map((job, index) => <JobCard key={job._id} job={job} index={index}></JobCard>)}
            </div>
            <div className='text-center mt-6'>
                <Link to={"/showAllJobs"}><button className='hover:bg-orange-600  hover:text-white duration-500 px-10 py-2 font-bold border '>See All</button></Link>
            </div>

        </div>
    );
};

export default All_Jobs;