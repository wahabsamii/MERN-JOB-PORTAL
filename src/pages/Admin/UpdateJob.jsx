import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id: jobId } = useParams();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    country: "",
    city: "",
    location: "",
    fixedSalary: "",
    imageFile: null,
  });

  // Fetch job details
  const fetchJob = async () => {
    try {
      const res = await axios.get(`/api/job/getone/${jobId}`);
      const job = res.data.job;
      setJob(job);
      setFormData({
        title: job.title || "",
        description: job.description || "",
        category: job.category || "",
        country: job.country || "",
        city: job.city || "",
        location: job.location || "",
        fixedSalary: job.fixedSalary || "",
        imageFile: null, // imageFile stays null unless new file is chosen
      });
    } catch (error) {
      console.error("Failed to fetch job", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      imageFile: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      }

      const res = await axios.put(`/api/job/update/${jobId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Job updated successfully");
    } catch (error) {
      console.error("Update failed", error);
      alert("Failed to update job");
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Update Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["title", "Job Title"],
          ["description", "Description"],
          ["category", "Category"],
          ["country", "Country"],
          ["city", "City"],
          ["location", "Location"],
          ["fixedSalary", "Fixed Salary"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={name === "fixedSalary" ? "number" : "text"}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Job Image</label>
          <input
            type="file"
            accept="image/*"
            name="imageFile"
            onChange={handleFileChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
          {job.image && (
            <img
              src={job.image}
              alt="Current Job"
              className="w-32 h-32 mt-2 object-cover rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default UpdateJob;
