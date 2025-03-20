export default function Footer() {
    return (
      <footer className="bg-[#131A2F] text-white py-8">
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <span className="text-lg font-bold">JOBNOVA</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0 flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">How it works</a>
            <a href="#" className="hover:text-white">Create a job</a>
            <a href="#" className="hover:text-white">About us</a>
            <a href="#" className="hover:text-white">Plans</a>
          </nav>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-gray-400 text-sm">&copy; 2025 Jobnova. Design with <span className="text-red-500">❤</span> by Abdul Wahab.</p>
          
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
              🏀
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
              🔗
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
              📘
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
              📷
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
              🐦
            </a>
          </div>
        </div>
      </footer>
    );
  }
  