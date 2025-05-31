import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/search/jobSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ExploreJobs() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([])
  const logo = "https://cdn-icons-png.flaticon.com/512/124/124010.png";

  const fetchJobs = async() => {
    try {
      const response = await axios.get("/api/job/getall");
      setJobs(response.data.jobs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchJobs()
  }, []);

  // if (loading) return <p className="text-center text-xl">Loading jobs...</p>;
  // if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className={`px-8 py-12 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <h2 className={`text-3xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Explore Jobs</h2>
      <p className="text-gray-500 mt-2">
        Search all open positions. Get your own personalized salary estimate.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        {jobs.map((job) => (
          <div
            onClick={() => navigate(`/job-details/${job._id}`)}
            key={job._id}
            className={`border p-6 rounded-xl w-[100%] shadow-md md:w-80 cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-white'}`}
          >
            <div className="flex items-center gap-4">
              <img src={logo} alt="Company Logo" className="w-12 h-12" />
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-gray-500 text-sm">
                  🕒 {new Date(job.jobPostedOn).toDateString()}
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold">{job.category}</h4>
            <p className="text-gray-500 text-sm">
              📍 {job.city}, {job.country}
            </p>
            <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-lg">
              {job.fixedSalary ? `Fixed: ${job.fixedSalary}` : "Salary Not Disclosed"}
            </span>
            <div className="mt-4">
              <p className="text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
