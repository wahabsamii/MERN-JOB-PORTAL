import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    password: '',
    image: currentUser?.image || '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔄 Add logic to send updated data to your backend (via fetch or axios)
    console.log('Updated User Data:', formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Preview */}
        <div className="flex flex-col items-center">
          <img
            src={formData.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-2"
          />
          <input type="file" name="image" onChange={handleChange} accept="image/*" />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
