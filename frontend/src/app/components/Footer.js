export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo and Tagline */}
          <div className="mb-6">
            <div className="flex justify-center items-center mb-2">
              <div className="flex items-center space-x-2">
              <img
            src="/logo.png" // Replace with your logo path
            alt="OneTrade Logo"
            className="h-22 w-22"
          />
              </div>
              <span className="text-2xl font-bold ml-2">OneTrade</span>
            </div>
            <p className="text-gray-400">Trade Live, Think ahead</p>
          </div>
  
          {/* Links */}
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-200">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-200">
              Rules & Regulations
            </a>
            <a href="#" className="hover:text-gray-200">
              Disclaimer
            </a>
          </div>
        </div>
      </footer>
    );
  }
  