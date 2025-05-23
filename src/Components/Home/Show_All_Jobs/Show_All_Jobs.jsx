import React, { useEffect, useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import JobCard from './JobCard';

const Show_All_Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500000);
  const [showSectors, setShowSectors] = useState(true);
  const [showDatePosted, setShowDatePosted] = useState(true);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/allJobs')
      .then(res => res.json())
      .then(data => {
        setJobsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobsData
    .filter((job) =>
      job?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job?.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job?.location?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) => {
      const salary = typeof job.salaryRange === 'object'
        ? job.salaryRange.min
        : Number((job.salaryRange || '').replace(/[^\d]/g, '')) || 0;
      return salary >= min && salary <= max;
    })
    .filter((job) => {
      return selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);
    })
    .filter((job) => {
      return selectedExperienceLevels.length === 0 || selectedExperienceLevels.includes(job.experienceLevel);
    });

  return (
    <div className='mb-9'>
      <div className="text-center py-10 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Featured Jobs</h2>
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
              <span className="text-orange-500">{showSectors ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
            </div>
            <div className={`transition-all duration-300 overflow-hidden ${showSectors ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-1`}>
              {["Full-Time", "Part-Time", "Hybrid"].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedJobTypes.includes(type)}
                    onChange={(e) => {
                      setSelectedJobTypes(prev =>
                        e.target.checked ? [...prev, type] : prev.filter(item => item !== type)
                      );
                    }}
                  />
                  <label className="text-sm text-gray-700">{type}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowDatePosted(!showDatePosted)}>
              <h2 className="text-sm font-bold text-orange-500 uppercase">Experience Level</h2>
              <span className="text-orange-500">{showDatePosted ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
            </div>
            <div className={`transition-all duration-300 overflow-hidden ${showDatePosted ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-1`}>
              {["Senior", "Internship", "Entry", "Mid Level", "Junior"].map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedExperienceLevels.includes(level)}
                    onChange={(e) => {
                      setSelectedExperienceLevels(prev =>
                        e.target.checked ? [...prev, level] : prev.filter(item => item !== level)
                      );
                    }}
                  />
                  <label className="text-sm text-gray-700">{level}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Filter */}
          <div>
            <h2 className="text-lg text-orange-500 font-semibold mb-4">Price Range</h2>
            <div className="relative w-full h-6 mb-4">
              <div className="absolute inset-y-1/2 left-0 w-full h-2 bg-gray-200 rounded -translate-y-1/2" />
              <div
                className="absolute h-2 bg-orange-400 rounded -translate-y-1/2"
                style={{
                  left: `${(min / 500000) * 100}%`,
                  width: `${((max - min) / 500000) * 100}%`,
                  top: '50%',
                }}
              />
              {[min, max].map((val, i) => (
                <input
                  key={i}
                  type="range"
                  min="0"
                  max="500000"
                  value={val}
                  onChange={(e) => i === 0 ? setMin(+e.target.value) : setMax(+e.target.value)}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none z-10"
                />
              ))}
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
              {[min, max].map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val.toLocaleString()}
                  readOnly
                  className="border border-gray-300 rounded p-2 w-24 text-center"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 w-full p-4 border shadow-sm bg-white animate-pulse">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className="text-center col-span-full text-gray-500">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Show_All_Jobs;
