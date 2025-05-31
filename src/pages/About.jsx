import React from 'react';
import OtherHero from '../components/OtherHero';
import { useSelector } from 'react-redux';

export default function About() {
  
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
    <OtherHero title={'About Us'}/>
   
    <div className={`px-10 mx-auto px-6 py-12 ${
      theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
    }`}>
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>

      <section className="mb-10">
        <p className={`text-lg ${
      theme === 'light' ? 'text-black' : ' text-white'
    } leading-relaxed text-center`}>
          Welcome to <span className="font-semibold text-blue-500">JobConnect</span> – your trusted job portal dedicated to connecting talented individuals with top employers across industries.
          Whether you're a developer, designer, marketer, or manager, our platform is built to help you find your dream job faster and smarter.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className={`text-2xl font-semibold mb-3 ${
      theme === 'light' ? 'text-gray-700' : ' text-white'
    }`}>Our Mission</h2>
          <p className={`${
      theme === 'light' ? 'text-black' : ' text-white'
    } leading-relaxed`}>
            Our mission is simple — empower professionals and businesses by providing a seamless and transparent platform for job discovery, hiring, and talent acquisition.
            We aim to reduce the gap between opportunity and talent by making the recruitment process efficient and accessible.
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-semibold mb-3 ${
      theme === 'light' ? 'text-gray-800' : ' text-white'
    }`}>What We Offer</h2>
          <ul className={`list-disc list-inside  ${
      theme === 'light' ? 'text-gray-800' : ' text-white'
    } leading-relaxed`}>
            <li>Real-time job listings across various categories</li>
            <li>Smart filtering and job alerts</li>
            <li>Verified company and applicant profiles</li>
            <li>Secure application process and profile management</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 text-center">
        <h2 className={`text-2xl font-semibold mb-4  ${
      theme === 'light' ? 'text-gray-800' : ' text-white'
    }`}>Join Us</h2>
        <p className={` ${
      theme === 'light' ? 'text-gray-800' : ' text-white'
    } mb-4`}>
          Whether you're a job seeker or an employer, we invite you to become a part of the JobConnect community.
          Let’s build the future of work — together.
        </p>
        <a
          href="/register"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>
    </div> </>
  );
}
