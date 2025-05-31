import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
export default function MyApplications() {
  const {currentUser} = useSelector((state) => state.user);
  const [myJobs, setmyJobs] = useState([]);
  const fetchSpecficMyJobs = async() => {
    const resposne = await axios.post(`/api/application/userapp`, {id : currentUser._id});
    console.log("resposneresposne",resposne.data)
    setmyJobs(resposne.data)
  }
  useEffect(() => {
    fetchSpecficMyJobs()
  })
  return (
    <div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myJobs.map((application) => (
          <div key={application._id} className="border p-5 rounded-lg shadow-lg bg-white">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{application.name}</h3>
                <p className="text-gray-500 text-sm">{application.email}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm">📞 {application.phone}</p>
            <p className="text-gray-700 text-sm">📍 {application.address}</p>

            <h4 className="mt-3 font-semibold text-gray-900">Cover Letter:</h4>
            <p className="text-gray-600 text-sm line-clamp-3">{application.coverLetter}</p>

            <div className="mt-4">
              <a
                href={application.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-semibold"
              >
                📄 View Resume
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
