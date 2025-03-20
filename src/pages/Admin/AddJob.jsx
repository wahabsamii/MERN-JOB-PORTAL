import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");
  const [image, setImage] = useState(null);

  const currentUser = useSelector(state => state.user);
  const postedBy = currentUser.currentUser._id;
  console.log("posted by here", postedBy);
  
  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    }

    await axios.post("/api/job/post",
      fixedSalary.length >= 4
        ? { title, description, category, country, city, location, fixedSalary, postedBy }
        : { title, description, category, country, city, location, salaryFrom, salaryTo, postedBy },
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mt-4 mb-4">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">Post a New Job</h3>
        <form onSubmit={handleJobPost} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job Title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Graphics & Design">Graphics & Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Frontend Web Development">Frontend Web Development</option>
            <option value="MERN Stack Development">MERN Stack Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Video Animation">Video Animation</option>
            <option value="Data Entry Operator">Data Entry Operator</option>
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <div>
            <label className="font-semibold text-gray-700">Salary Type:</label>
            <select
              value={salaryType}
              onChange={(e) => setSalaryType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="default">Select Salary Type</option>
              <option value="Fixed Salary">Fixed Salary</option>
              <option value="Ranged Salary">Ranged Salary</option>
            </select>
          </div>

          {salaryType === "default" ? (
            <p className="text-red-500 text-sm">Please select a Salary Type *</p>
          ) : salaryType === "Fixed Salary" ? (
            <input
              type="number"
              placeholder="Enter Fixed Salary"
              value={fixedSalary}
              onChange={(e) => setFixedSalary(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Salary From"
                value={salaryFrom}
                onChange={(e) => setSalaryFrom(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Salary To"
                value={salaryTo}
                onChange={(e) => setSalaryTo(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          {/* <div>
          <input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
  className="w-full border border-gray-300 rounded-lg px-4 py-2"
/>
          </div> */}
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Job Description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
