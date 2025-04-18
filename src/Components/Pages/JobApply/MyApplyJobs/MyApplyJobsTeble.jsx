import React from "react";
import { useNavigate } from "react-router-dom";

const MyApplyJobsTeble = ({ jobs = [], onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">Your Posted Jobs</h2>
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
                  <td className="px-4 py-3 capitalize">{job.sector}</td>
                  <td className="px-4 py-3">{new Date(job.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">${job.salary}</td>
                  <td className="px-4 py-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => navigate(`/jobs/${job._id}/applications`)}
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

export default MyApplyJobsTeble;
