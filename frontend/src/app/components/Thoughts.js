export default function Thoughts() {
  return (
    <section id="hero" className="py-16 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Layout: Flexbox */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-200">
              Trade Your Thoughts.
              <br />
              Earn Your Rewards.
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              <span className="block">
                Turn predictions into profits with Onetrade.
              </span>
              <span className="block mt-2">
                From sports to politics, your knowledge becomes your greatest
                asset.
              </span>
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <a
                href="https://exchange.onetrade.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-medium text-gray-900 bg-teal-500 rounded-full hover:bg-teal-400 transition"
              >
                Sign up &amp; Trade Live!
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
  {/* Main Image */}
  <div className="relative">
  <img
    src="/girlwithmega.png"
    alt="Girl with megaphone"
    className="w-3/4 lg:w-2/3 h-2/4 max-w-xs lg:max-w-sm relative z-10 mt-20 ml-60"
  />

<img
    src="/currency1.png"
    alt="Currency"
    className="w-[53px] h-[53px] object-contain absolute top-10 left-0 z-20"
  />
  <img
    src="/currency.png"
    alt="Currency1"
    className="w-[53px] h-[53px] object-contain absolute top-20 left-5 z-20"
  />
  <img
    src="/currency2.png"
    alt="Currency2"
    className="w-[53px] h-[53px] object-contain absolute top-20 left-40 z-20"
  />
</div>


            {/* Floating Cards */}
            <div className="absolute top-0 left-200 bg-white text-black p-4 rounded-lg shadow-lg w-48 max-w-xs">
  <h3 className="font-semibold">Soccer</h3>
  <p className="text-sm">
    Does Robert Lewandowski deserve to be ranked among the all-time greats?
  </p>
  <div className="flex justify-between mt-2">
    <button className="bg-green-500 text-white px-2 py-1 rounded">
      YES $40
    </button>
    <button className="bg-red-500 text-white px-2 py-1 rounded">
      NO $15
    </button>
  </div>
</div>


<div className="absolute bottom-30 left-40 bg-white text-black p-4 rounded-lg shadow-lg w-48 max-w-xs">
              <h3 className="font-semibold">Digital transformation</h3>
              <p className="text-sm">
                DO you think block chain technology will dominate financial transactions in next decade?
              </p>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  YES $7
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  NO $13
                </button>
              </div>
            </div>

            <div className="absolute bottom-10 left-80 bg-white text-black p-4 rounded-lg shadow-lg w-48 h-48 max-w-xs z-20 flex flex-col justify-between">
            <h3 className="font-semibold">Artificial Intelligence</h3>
    <p className="text-sm">
      Do you think AI will significantly improve the healthcare
      industry in the next five years?
    </p>
    <div className="flex justify-between mt-2">
      <button className="bg-green-500 text-white px-2 py-1 rounded">
        YES $7.5
      </button>
      <button className="bg-red-500 text-white px-2 py-1 rounded">
        NO $3.5
      </button>
    </div>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
}
