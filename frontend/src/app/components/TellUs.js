export default function TellUs() {
    return (
      <div className="bg-gradient-to-br from-teal-300 to-green-300 min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
          {/* Text Section */}
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your voice matters and <span className="text-teal-500">Onetrade</span> rewards it.
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Share your predictions on sports, politics, and entertainment to turn your ideas into earnings.
              Be smart, stay ahead, and get rewarded for being right.
            </p>
            <button className="px-6 py-3 bg-teal-500 text-white text-lg font-medium rounded-full hover:bg-teal-600 transition">
              Trade Live!
            </button>
          </div>
  
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/girl.png" // Place your image in the public folder as 'girl-pointing.png'
              alt="Woman pointing up"
              className="rounded-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </div>
    );
  }
  