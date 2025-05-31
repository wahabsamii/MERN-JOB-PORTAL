import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { LuUser } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux';
import {signinSuccess, signoutSuccess} from '../redux/user/authUser'
import { IoSunnyOutline } from "react-icons/io5";
import { toggleTheme } from "../redux/theme/themeSlice";
import { FaRegMoon } from "react-icons/fa";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Header() {
    const isAuth = useSelector(state => state.user.isAuth);

    const {currentUser} = useSelector(state => state.user);
    console.log('current', currentUser)
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const [showmodel, setShowmodel] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [registeruser, setRegisteruser] = useState(false);
    const [userMenu, setuserMenu] = useState(false);
    // console.log("registeruser status checking", registeruser);

    const handelReg = async () => {
      if (!registeruser) {
        // Login logic
        try {
          const response = await axios.post("https://jobnova-backend.vercel.app/api/user/login", {
            email: email,
            password: password,
          });
    
          if (response.data.success) {
            dispatch(signinSuccess(response.data.user));
            setShowmodel(false);
            toast.success("Login successful!");
          }
        } catch (error) {
          console.error(error);
    
          if (error.response) {
            toast.error(error.response.data.message || "Something went wrong!");
          } else {
            toast.error("Network error. Please try again.");
          }
        }
      } else {
        // Registration logic
        try {
          const response = await axios.post("https://jobnova-backend.vercel.app/api/user/register", {
            email: email,
            password: password,
            phone: phone,
            name: name,
          });
    
          if (response.data.success) {
            toast.success("Account Created!");
            setRegisteruser(false); // Switch back to login form after successful registration
            setShowmodel(false); // Close the modal after registration
          }
        } catch (error) {
          console.error(error);
    
          if (error.response) {
            toast.error(error.response.data.message || "Something went wrong!");
          } else {
            toast.error("Network error. Please try again.");
          }
        }
      }
    };

    const navigation = useNavigate();

    const handleLogout = () => {
      dispatch(signoutSuccess());
      navigation("/");
    }
    
  return (
    <div className='relative'>
        <div className='absolute z-40 '>
        {showmodel && (
  <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative">
      <button
        onClick={() => setShowmodel(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black z-10"
      >
        ✖
      </button>
      <h2 className="text-xl font-bold mb-4 text-center">{registeruser ? "Register Your Account" : "Login in your Account"}</h2>
      <div>
      {registeruser && <input placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} className='w-full border-black mb-3 border-2 p-2 rounded-xl'/>}
      
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} className='w-full border-black mb-3 border-2 p-2 rounded-xl'/>
      {registeruser && <input placeholder='Enter Your Phone' onChange={(e) => setPhone(e.target.value)} className='w-full border-black mb-3 border-2 p-2 rounded-xl'/>}
      <input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} className='w-full border-black mb-3 border-2 p-2 rounded-xl'/>
      <button className='bg-blue-500 p-2 mt-4 w-full text-white rounded-xl' onClick={handelReg}>{registeruser ? "Register" : "Login"}</button>
      <p className="mt-3 text-center cursor-pointer">
        <Toaster />
  {registeruser ? "Already have an account?" : "Don't have an account?"}
  <span
    onClick={() => setRegisteruser((prev) => !prev)}
    className="text-blue-400 ml-1 cursor-pointer"
  >
    {registeruser ? "Login Now" : "Register Now"}
  </span>
</p>

      </div>
    </div>
  </div>
)}

        </div>
      <div className="min-h-full">
        <nav className={theme === 'light' ? "bg-blue-600" : 'bg-black'}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img src={logo} alt="Your Company" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <div className="relative group">
                      <NavLink to="/"  className={({isActive}) => isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-white text-black" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"}>
                        Home
                      </NavLink>
                      <div className="absolute left-0 hidden w-48 bg-white shadow-md group-hover:block mt-4 rounded-sm overflow-hidden">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Overview</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stats</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stats</a>
                      </div>
                    </div>
                    <div className="relative group">
                      <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                        Employees
                      </a>
                      <div className="absolute left-0 hidden w-48 bg-white shadow-md group-hover:block mt-4 rounded-sm overflow-hidden">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Members</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Roles</a>
                      </div>
                    </div>
                    <NavLink to="/apply"  className={({isActive}) => isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-white text-black" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"} >Apply Now</NavLink>
                    <NavLink to="/about-us"  className={({isActive}) => isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-white text-black" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"} >About Us</NavLink>
                    <NavLink to="/contact"  className={({isActive}) => isActive ? "rounded-md px-3 py-2 text-sm font-medium bg-white text-black" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"}>Contact Us</NavLink>
                  </div>
                </div>
              </div>
                <div className='border-gray-100 border p-2 rounded-full cursor-pointer' onClick={() => dispatch(toggleTheme())}>
                      {theme === 'light' ? <IoSunnyOutline className='text-white' /> : <FaRegMoon className='text-white' />}
                </div>
              <div className="hidden md:block flex flex-row">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  {
                    isAuth ? (
                        <div className="relative group">
                    <button onClick={() => setuserMenu(true)} className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img className="size-8 rounded-full" src={currentUser.image} alt="" />
                    </button>
                    {
                      userMenu && <div className="absolute right-0 mt-2 w-48 bg-white shadow-md group-hover:block rounded-xl overflow-hidden">
                      <NavLink onClick={() => setuserMenu(false)} to={currentUser.role == "job seeker" ? '/dashboard/seeker' : '/dashboard/admin/all-jobs'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2 "><LuUser /> Your Profile</NavLink>
                      <a onClick={() => setuserMenu(true)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2"><IoSettingsOutline /> Settings</a>
                      <a onClick={handleLogout} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2"><FaArrowRightFromBracket/> Sign out</a>
                    </div>
                    }
                  </div>
                    ) : (
                        <button  onClick={() => setShowmodel(true)} className='bg-blue-500 px-6 py-2 rounded-full text-white'>LOGIN</button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
