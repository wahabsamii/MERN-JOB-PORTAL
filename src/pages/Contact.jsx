import React from 'react'
import logolft from '../assets/contact.svg'
import OtherHero from '../components/OtherHero'
import { useSelector } from 'react-redux';
export default function Contact() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div>
        <OtherHero title='Contact Us' />
    <div className={`flex justify-center items-center min-h-screen ${
      theme === 'light' ? 'bg-white' : 'bg-black'
    }`}>
      <div className={`max-w-5xl w-full ${
      theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
    } p-10 rounded-lg shadow-md flex mt-5 mb-5`}>
        {/* Left Side - Illustration */}
        <div className="w-1/2 p-6">
          <img
            src={logolft}
            alt="Contact Illustration"
            className="w-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-6">
        <h2 className={`text-3xl font-semibold ${theme === 'light' ? 'text-gray-800' : ' text-white'} mb-6`}>Get in touch!</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`${theme === 'light' ? 'text-gray-600' : ' text-white'} `}>Your Name *</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className={`${theme === 'light' ? 'text-gray-600' : ' text-white'} `}>Your Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label className={`${theme === 'light' ? 'text-gray-600' : ' text-white'} `}>Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className={`${theme === 'light' ? 'text-gray-600' : ' text-white'} `}>Comments *</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
