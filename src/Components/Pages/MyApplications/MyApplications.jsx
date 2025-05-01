import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const MyApplications = () => {
  const queryClient = useQueryClient();
  const [confirmId, setConfirmId] = useState(null);

  const { data: apps, isLoading, isError } = useQuery({
    queryKey: ['applications'],
    queryFn: () =>
      axios.get('http://localhost:4000/applications').then(res => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:4000/applications/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      setConfirmId(null); 
    },
  });

  const handleWithdraw = (id) => {
    setConfirmId(id);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-orange-500">My Applications</h1>

      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-orange-400 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {isError && <p className="text-orange-500">Error loading applications</p>}
      {!isLoading && apps?.length === 0 && <p>No applications found</p>}

      {!isLoading && apps?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg text-sm sm:text-base">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-3 px-4">Job Title</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Applied On</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{app.job?.title}</td>
                  <td className="py-3 px-4">{app.job?.company}</td>
                  <td className="py-3 px-4">
                    {new Date(app.submitted_At).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 capitalize">{app.status || 'Pending'}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleWithdraw(app._id)}
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Are you sure you want to withdraw?
            </h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => mutation.mutate(confirmId)}
                className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition"
              >
                Sure
              </button>
              <button
                onClick={() => setConfirmId(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
