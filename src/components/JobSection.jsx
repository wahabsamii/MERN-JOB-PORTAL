import React from "react";
import job1 from '../assets/both.png'
import job2 from '../assets/job2.jpg'
const JobSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
      <div className="w-full md:w-1/2">
        <img
          src={job1}
          alt="Happy professional"
          className="w-full rounded-lg"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-4.293 4.293a1 1 0 01-1.415-1.415l4.293-4.293a1 1 0 111.415 1.415z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">
          Millions of jobs. <br /> Find the one that’s right for you.
        </h2>
        <p className="text-gray-600">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-800">
            ✅ Digital Marketing Solutions for Tomorrow
          </li>
          <li className="flex items-center gap-2 text-gray-800">
            ✅ Our Talented & Experienced Marketing Agency
          </li>
          <li className="flex items-center gap-2 text-gray-800">
            ✅ Create your own skin to match your brand
          </li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700">
          ABOUT US →
        </button>
      </div>
    </section>
  );
};

export default JobSection;
