import React from 'react';
import bgImg from "../assets/mainbg.png"
import rightImg from '../assets/rightImg.png'
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center px-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-[50%]  bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
          Get hired by the popular candidates.
        </h1>
        <p className="text-xl text-white mb-8">
          Find Jobs, Employment & Career Opportunities. Some of the companies we’ve helped recruit excellent applicants over the years.
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search jobs & candidates..."
            className="px-4 py-2 w-64 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600">
            SEARCH
          </button>
        </div>
      </div>
      <div className='w-[50%]'>
        <img src={rightImg} />
      </div>
    </div>
  );
};

export default HeroSection;