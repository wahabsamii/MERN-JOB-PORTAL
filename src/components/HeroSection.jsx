import React, { useState } from 'react';
import bgImg from "../assets/mainbg.png"
import rightImg from '../assets/rightImg2.png';
import bgLayer from '../assets/homelayer.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from "../redux/search/jobSlice";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate()
    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    };
  
    const handleSearchSubmit = () => {
      if (searchInput.trim() !== "") {
        dispatch(setSearchTerm(searchInput)); // Store search term in Redux
        navigate("/search"); // Redirect to search results page
      }
    };
  return (
    <div
    className={`bg-cover bg-center ${
      theme === 'light' ? 'bg-blue-500' : 'bg-black'
    } h-screen flex items-center justify-center px-10`}
    
      style={{ backgroundImage: `url(${bgLayer})`, backgroundSize:"cover" }}
    >
      <div className="w-[50%]  bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
          Get hired by the popular candidates.
        </h1>
        <p className="text-xl text-white mb-8">
          Find Jobs, Employment & Career Opportunities. Some of the companies we’ve helped recruit excellent applicants over the years.
        </p>
        <div className="flex bg-white p-2 rounded-full items-center">
          <IoIosSearch className='text-[18px] ml-3' />
          <input type="text" value={searchInput} onChange={handleSearchChange} placeholder="Search jobs & candidates..." className="px-4 py-2 w-[70%] rounded-l-lg focus:outline-none"
          />
          <button onClick={handleSearchSubmit} className="bg-blue-500 rounded-full text-white px-6 py-2 hover:bg-blue-600">
            SEARCH
          </button>
        </div>
      </div>
      <div className='w-[50%] flex justify-center'>
        <img src={rightImg} width={400}/>
      </div>
    </div>
  );
};

export default HeroSection;