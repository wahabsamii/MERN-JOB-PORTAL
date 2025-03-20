import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
export default function ExploreJobs() {
  const [jobsall, setAllJobs] = useState([]);
  const navigate = useNavigate();
  const logo = "https://cdn-icons-png.flaticon.com/512/124/124010.png";

  const getAllJobs = async () => {
    try {
      const response = await axios.get("/api/job/getall");
      console.log(response.data.jobs);
      setAllJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-semibold">Explore Jobs</h2>
      <p className="text-gray-500 mt-2">
        Search all the open positions on the web. Get your own personalized salary
        estimate. Read reviews on over 30,000+ companies worldwide.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        {jobsall.map((job) => (
          <div onClick={() => navigate(`/job-details/${job._id}`)} key={job._id} className="border p-6 rounded-xl shadow-md w-80">
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
              <p className="text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function ExploreJobs() {
//     const jobs = [
//       {
//         id: 1,
//         company: "Facebook",
//         logo: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
//         timeAgo: "2 days ago",
//         position: "Web Designer / Developer",
//         location: "Australia",
//         jobType: "Full Time",
//         applied: 20,
//         vacancy: 40,
//       },
//       {
//         id: 2,
//         company: "Google",
//         logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
//         timeAgo: "5 days ago",
//         position: "Marketing Director",
//         location: "Russia",
//         jobType: "Part Time",
//         applied: 20,
//         vacancy: 40,
//       },
//       {
//         id: 3,
//         company: "Android",
//         logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
//         timeAgo: "3 days ago",
//         position: "Application Developer",
//         location: "Germany",
//         jobType: "Remote",
//         applied: 20,
//         vacancy: 40,
//       },
      
//       {
//         id: 5,
//         company: "Android",
//         logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
//         timeAgo: "3 days ago",
//         position: "Application Developer",
//         location: "Germany",
//         jobType: "Remote",
//         applied: 20,
//         vacancy: 40,
//       },
//     ];

//     const logo = "https://cdn-icons-png.flaticon.com/512/124/124010.png";
//     const [jobsall, setAlljobs] = useState([]);

//     const getAllJobs = async () => {
//         const response = await axios.get("/api/job/getall");
//         console.log(response.data.jobs);
//         setAlljobs(response.data.jobs);
//     }
//     useEffect(() => {
//       getAllJobs();
//     }, []);
  
//     return (
//       <div className="px-8 py-12">
//         <h2 className="text-3xl font-semibold">Explore Jobs</h2>
//         <p className="text-gray-500 mt-2">
//           Search all the open positions on the web. Get your own personalized salary
//           estimate. Read reviews on over 30000+ companies worldwide.
//         </p>
//         <div className="mt-8 flex gap-6">
//           {jobs.map((job) => (
//             <div key={job._id} className="border p-6 rounded-xl shadow-md w-80">
//               <div className="flex items-center gap-4">
//                 <img src={logo} alt={job.company} className="w-12 h-12" />
//                 <div>
//                   <h3 className="font-semibold">{job.company}</h3>
//                   <p className="text-gray-500 text-sm">🕒 {job.timeAgo}</p>
//                 </div>
//               </div>
//               <h4 className="mt-4 text-lg font-semibold">{job.position}</h4>
//               <p className="text-gray-500 text-sm">📍 {job.location}</p>
//               <span className="mt-2 inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-lg">
//                 {job.jobType}
//               </span>
//               <div className="mt-4">
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-blue-500 h-2 rounded-full"
//                     style={{ width: `${(job.applied / job.vacancy) * 100}%` }}
//                   ></div>
//                 </div>
//                 <p className="mt-1 text-gray-500 text-sm">
//                   {job.applied} applied of {job.vacancy} vacancy
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  