import { NavLink } from "react-router-dom";
import { FaBriefcase, FaPlusCircle, FaEdit, FaFileAlt } from "react-icons/fa";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/all-jobs"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <FaBriefcase /> View All Jobs
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/add-job"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <FaPlusCircle /> Add New Job
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/update-job"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <FaEdit /> Update Job
          </NavLink>
        </li>
        <li  className="mb-2">
          <NavLink
            to="/dashboard/admin/all-applications"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <FaFileAlt /> All Applications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/admin/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <HiMiniArrowRightStartOnRectangle /> Edit Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/admin/all-ap"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md ${
                isActive ? "bg-gray-700 text-blue-400" : "hover:text-gray-300"
              }`
            }
          >
            <HiMiniArrowRightStartOnRectangle /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
