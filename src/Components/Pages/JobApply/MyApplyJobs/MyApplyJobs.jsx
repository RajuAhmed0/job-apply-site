
import React, { useEffect, useState } from "react";

import axios from "axios";
import MyApplyJobsTeble from "./MyApplyJobsTeble";

const MyApplyJobs = () => {
  const [job, setJobs] = useState([]);

  useEffect(() => {
    // Replace with your API route
    axios.get("/api/jobs/my-jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:4000/allJobs/${jobId}`);
      setJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };
 
  return <div>
    <MyApplyJobsTeble job={job} onDelete={handleDelete}></MyApplyJobsTeble>
  </div>;
};

export default MyApplyJobs;
