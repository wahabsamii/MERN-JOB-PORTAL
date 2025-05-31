import { FaPhone, FaMicrochip, FaHeartbeat, FaClock } from "react-icons/fa";
import { useSelector } from "react-redux";

const features = [
  {
    icon: <FaPhone className="text-blue-500 text-3xl" />, 
    title: "24/7 Support",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon: <FaMicrochip className="text-blue-500 text-3xl" />, 
    title: "Tech & Startup Jobs",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon: <FaHeartbeat className="text-blue-500 text-3xl" />, 
    title: "Quick & Easy",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon: <FaClock className="text-blue-500 text-3xl" />, 
    title: "Save Time",
    description: "Many desktop publishing now use and a search for job.",
  }
];

export default function JobnovaSection() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <section className={`py-16 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    } text-center`}>
      <h2 className={`text-3xl font-bold mb-4 ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>Here's why you'll love it Jobnova</h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
        Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-xl inline-block mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500 mb-4">{feature.description}</p>
            <a href="#" className="text-blue-500 font-medium inline-flex items-center">
              Read More <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
