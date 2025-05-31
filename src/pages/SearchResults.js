import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query')
  const [jobs, setJobs] = useState([])
  const logo = "https://cdn-icons-png.flaticon.com/512/124/124010.png";
  const fetchJobs = async() => {
    try {
      const response = await axios.get("https://jobnova-backend.vercel.app/api/job/getall");
      setJobs(response.data.jobs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchJobs()
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm));
    
   const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`p-6 ${
      theme === 'light' ? 'bg-blue-500' : 'bg-gray-800'
    }`}>
      <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'} text-center mb-6`}>Search Results</h2>

      {filteredJobs.length > 0 ? (
        <ul className="space-y-4">
          {filteredJobs.map((job) => ( 
          <div
            onClick={() => navigate(`/job-details/${job._id}`)}
            key={job._id}
            className="border p-6 rounded-xl shadow-md bg-white w-80 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Company Logo" className="w-12 h-12" />
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
        </ul>
      ) : (
        <p className="text-red-500 text-center text-xl">
          No jobs found for "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default SearchResults;
