import React, { useEffect, useState } from 'react';
import OthersHero from '../components/OtherHero';
import {useParams} from 'react-router-dom';
import axios from 'axios'
export default function JobsDetails() {
  const params = useParams();
  const id = params.id;
  const [jobDetails, setjobDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const resposne = await axios.get(`https://jobnova-backend.vercel.app/api/job/getone/${id}`);
        setjobDetails(resposne.data.job);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);


  
  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!jobDetails) return <div className="text-center py-10">Job not found</div>;
  return (
    <div>
        <OthersHero title={jobDetails.title} />
        <section className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-10">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 rounded-lg flex items-center p-6 text-white"
        style={{ backgroundImage: `url(${jobDetails.image})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">{jobDetails.title}</h1>
          <p className="text-lg">{jobDetails.category}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Job Description</h2>
        <p className="text-gray-600 mt-2">{jobDetails.description}</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-700">📍 Location</h3>
            <p className="text-gray-500">{jobDetails.city}, {jobDetails.country}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-700">💰 Salary</h3>
            <p className="text-gray-500">PKR {jobDetails.fixedSalary}</p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
