import React from 'react'
import logolft from '../assets/contact.svg'
import OtherHero from '../components/OtherHero'
export default function Contact() {
  return (
    <div>
        <OtherHero />
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md flex mt-5 mb-5">
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
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in touch!</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">Your Name *</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-600">Your Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-gray-600">Comments *</label>
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
