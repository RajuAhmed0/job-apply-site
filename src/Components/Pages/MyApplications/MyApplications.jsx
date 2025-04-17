import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const MyApplications = () => {
  const queryClient = useQueryClient();

  // Fetch all applications
  const { data: apps, isLoading, isError } = useQuery({
    queryKey: ['applications'],
    queryFn: () =>
      axios.get('http://localhost:4000/applications').then(res => res.data),
  });

  // Withdraw an application
  const mutation = useMutation({
    mutationFn: (id) => {
      // ✅ FIXED: Send DELETE to the correct URL with ID param
      return axios.delete(`http://localhost:4000/applications/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });

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
        <table className="min-w-full bg-white shadow-md rounded-lg">
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
                <td className="py-3 px-4">{app.jobTitle}</td>
                <td className="py-3 px-4">{app.companyName}</td>
                <td className="py-3 px-4">{new Date(app.submitted_At).toLocaleDateString()}</td>
                <td className="py-3 px-4 capitalize">{app.status}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => mutation.mutate(app._id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyApplications;
