import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import {useDispatch} from 'react-redux'
import { signoutSuccess } from "../redux/user/authUser";
const SeekerSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6">💼 Job Seeker</h2>

      <ul className="space-y-3">
        <li>
          <NavLink
            to="/dashboard/seeker/all-jobs"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive ? "bg-white text-blue-700 font-semibold" : "hover:bg-blue-500"
              }`
            }
          >
            <FaBriefcase className="text-lg" />
            View All Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/seeker/my-applications" className={({ isActive }) =>`flex items-center gap-3 px-4 py-2 mb-3 rounded-md transition-all duration-200 ${isActive ? "bg-white text-blue-700 font-semibold" : "hover:bg-blue-500"}`}>
            <MdOutlineWorkHistory className="text-lg" /> My Applications
          </NavLink>
          <NavLink onClick={() => dispatch(signoutSuccess())} to="/" className={({ isActive }) =>`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${isActive ? "bg-white text-blue-700 font-semibold" : "hover:bg-blue-500"}`}>
            <HiMiniArrowRightStartOnRectangle className="text-lg" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SeekerSidebar;
