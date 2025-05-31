import { FaFacebook, FaAndroid, FaSpotify, FaGoogle, FaLinkedin } from "react-icons/fa";
import { SiLenovo } from "react-icons/si";
import officeSpace from '../assets/office-space.jpg'
import { useSelector } from "react-redux";
export default function BestCompanies() {
  const theme = useSelector((state) => state.theme.theme);
  const companies = [
    { name: "Facebook", icon: <FaFacebook className='text-blue-600 text-2xl' /> },
    { name: "Google", icon: <FaGoogle className='text-red-600 text-2xl' /> },
    { name: "Android", icon: <FaAndroid className='text-green-600 text-2xl' /> },
    { name: "Lenovo", icon: <SiLenovo className='text-red-600 text-2xl' /> },
    { name: "Spotify", icon: <FaSpotify className='text-green-600 text-2xl' /> },
    { name: "Linkedin", icon: <FaLinkedin className='text-blue-600 text-2xl' /> },
  ];

  return (
    <section className={`py-16 px-6 lg:px-24 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    } flex flex-col lg:flex-row items-center gap-10`}>
      <div className="flex-1">
        <h2 className={`text-3xl font-bold ${
      theme === 'light' ? 'text-gray-900' : 'text-white'
    } text-gray-900`}>Find Best Companies.</h2>
        <p className="text-gray-500 mt-3 text-lg">
          Search all the open positions on the web. Get your own personalized salary estimate.
          Read reviews on over 30,000+ companies worldwide.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100 rounded-xl shadow-sm gap-3">
              <div className="p-3 bg-white rounded-lg shadow">{company.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
                <p className="text-gray-500 text-sm">40 vacancies</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-blue-600 font-semibold cursor-pointer">See More Companies →</p>
      </div>
      <div className="flex-1 relative">
        <img
          src={officeSpace}
          alt="Office Space"
          className="w-full rounded-2xl shadow-lg"
        />
        <div className="absolute left-6 bottom-6 bg-white p-3 rounded-full shadow-xl cursor-pointer">
          <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
