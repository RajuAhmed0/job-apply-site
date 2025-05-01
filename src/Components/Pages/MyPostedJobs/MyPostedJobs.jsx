import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const MyPostedJobs = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['myPostedJobs', user?.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:4000/allJobs?email=${user.email}`); 
      console.log("Fetched jobs:", res.data); 
      return Array.isArray(res.data) ? res.data : res.data.jobs || [];
    },
    enabled: !!user?.email, 
  });

  const jobs = Array.isArray(data) ? data : [];


  const onDelete = async (id) => {
    if (confirm('Are you sure you want to delete this job?')) {
      await axios.delete(`http://localhost:4000/allJobs/${id}`);
      location.reload(); 
    }
  };

 
  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load jobs.</p>;

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">
        Your Posted Jobs
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-xl shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Sector</th>
              <th className="px-4 py-3 text-left">Posted On</th>
              <th className="px-4 py-3 text-left">Salary</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No jobs posted yet.
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{job.title}</td>
                  <td className="px-4 py-3 capitalize">{job.category}</td>
                  <td className="px-4 py-3">
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">${typeof job?.salaryRange === 'object'
                        ? `${job?.salaryRange.min} – ${job?.salaryRange.max}`
                        : job?.salaryRange || 'Negotiable'}</td>
                  <td className="px-4 py-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => navigate(`/jobs_details/${job?._id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                    >
                      View Applications
                    </button>
                    <button
                      onClick={() => navigate(`/jobs/${job._id}/edit`)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition"
                    >
                      Update Job
                    </button>
                    <button
                      onClick={() => onDelete(job._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                    >
                      Delete Job
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
