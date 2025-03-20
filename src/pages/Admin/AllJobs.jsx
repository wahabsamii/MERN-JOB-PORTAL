import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAllJobs = () => {
  const [jobsall, setAllJobs] = useState([]);
  const navigate = useNavigate(); // ✅ Fixed: Import useNavigate
  const logo = "https://cdn-icons-png.flaticon.com/512/124/124010.png";

  const getAllJobs = async () => {
    try {
      const response = await axios.get("/api/job/getall");
      setAllJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="mt-8">
      {jobsall.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No jobs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsall.map((job) => (
            <div
              key={job._id}
              onClick={() => navigate(`/job-details/${job._id}`)}
              className="border p-6 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <img src={logo} alt="Company Logo" className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-gray-500 text-sm">🕒 {new Date(job.jobPostedOn).toDateString()}</p>
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold">{job.category}</h4>
              <p className="text-gray-500 text-sm">📍 {job.city}, {job.country}</p>
              <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-lg">
                {job.fixedSalary ? `Fixed: ${job.fixedSalary}` : "Salary Not Disclosed"}
              </span>
              <div className="mt-4">
                <p className="text-gray-700 line-clamp-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllJobs;
