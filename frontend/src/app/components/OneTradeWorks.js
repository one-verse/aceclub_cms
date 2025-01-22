// components/OneTradeWorks.js
export default function OneTradeWorks() {
    const features = [
      {
        title: "Diverse Trading Markets",
        description:
          "Trade on predictions across categories like Sports, Politics, Entertainment, Weather, and Current Affairs.",
        icon: "/icons/market.svg", // Replace with the actual path to your icon
      },
      {
        title: "Earn from Predictions",
        description:
          "The more accurate your predictions, the more you earn, turning knowledge and insight into real rewards.",
        icon: "/icons/earn.svg",
      },
      {
        title: "Simple 3-Step Process",
        description:
          "Explore Markets → Place Predictions → Watch and Earn, making it easy for anyone to get started.",
        icon: "/icons/process.svg",
      },
      {
        title: "Dynamic Market Prices",
        description:
          "Markets update in real-time based on user actions, keeping the trading environment engaging and competitive.",
        icon: "/icons/prices.svg",
      },
      {
        title: "Skill Over Luck",
        description:
          "Use your insights and analysis to make informed predictions, rewarding strategy over randomness.",
        icon: "/icons/skill.svg",
      },
      {
        title: "Real-Time Trading",
        description:
          "Experience fast and dynamic trading markets with instant updates, ensuring you never miss an opportunity.",
        icon: "/icons/realtime.svg",
      },
    ];
  
    return (
      <section className="bg-black text-white py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">How OneTrade Works</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Discover the key features that make OneTrade the ultimate platform
            for opinion trading, where strategy meets opportunity!
          </p>
        </div>
  
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  