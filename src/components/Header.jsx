import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { LuUser } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import {useDispatch, useSelector} from 'react-redux';
import {signinSuccess, signoutSuccess} from '../redux/user/authUser'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
export default function Header() {
    const isAuth = useSelector(state => state.user.isAuth);
    const currentUser = useSelector(state => state.user);
    // console.log("current user is here", currentUser.currentUser);
    // currentUser = currentUser.currentUser;
    const dispatch = useDispatch();
    const [showmodel, setShowmodel] = useState(false)
    const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [showmenu, setShowmenu] = useState(false);
    const handelReg = async () => {
      try {
        const response = await axios.post("/api/user/login", {
          // name: name,
          email:email,
          // phone: phone,
          password: password
        });
        dispatch(signinSuccess(response.data.user));
        if (response.data.success) {
          setShowmodel(false)
        }
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    }

  return (
    <div className='relative'>
        <div className='absolute z-40'>
        {showmodel && (
  <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
      <button
        onClick={() => setShowmodel(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black z-10"
      >
        ✖
      </button>
      <h2 className="text-xl font-bold mb-4">Login in your Account</h2>
      <p>This is the modal content.</p>
      <div>
        
      {/* <input placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} className='w-full border-black border-2 p-2 rounded-sm'/> */}
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} className='w-full border-black mb-3 border-2 p-2 rounded-sm'/>
      {/* <input placeholder='Enter Your Phone' onChange={(e) => setPhone(e.target.value)} className='w-full border-black border-2 p-2 rounded-sm'/> */}
      <input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} className='w-full border-black border-2 p-2 rounded-sm'/>
      <button className='bg-blue-500 p-2 mt-4 w-full' onClick={handelReg}>Login</button>
      <p className='mt-3 text-center cursor-pointer' >Register Your Account Here</p>
      </div>
    </div>
  </div>
)}

        </div>
      <div className="min-h-full">
        <nav className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img src={logo} alt="Your Company" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <div className="relative group">
                      <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
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
                    <NavLink to="/apply" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Apply Now</NavLink>
                    <NavLink to="/about-us" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</NavLink>
                    <NavLink to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  {
                    isAuth ? (
                        <div className="relative group">
                    <button  className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                    <div className="absolute right-0  mt-2 w-48 bg-white shadow-md group-hover:block rounded-xl overflow-hidden">
                      <NavLink to={currentUser.currentUser.role == "job seeker" ? '/dashboard/seeker' : '/dashboard/admin'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2 "><LuUser /> Your Profile</NavLink>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2"><IoSettingsOutline /> Settings</a>
                      <a onClick={() => dispatch(signoutSuccess())} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-2"><FaArrowRightFromBracket/> Sign out</a>
                    </div>
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
