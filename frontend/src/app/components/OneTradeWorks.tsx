// components/OneTradeWorks.js
export default function OneTradeWorks() {
  const features = [
    {
      title: "Diverse Trading Markets",
      description:
        "Trade on predictions across categories like Sports, Politics, Entertainment, Weather, and Current Affairs.",
      icon: "/img/how_work/variant=2.svg", // Replace with the actual path to your icon
    },
    {
      title: "Earn from Predictions",
      description:
        "The more accurate your predictions, the more you earn, turning knowledge and insight into real rewards.",
      icon: "/img/how_work/variant=3.svg",
    },
    {
      title: "Simple 3-Step Process",
      description:
        "Explore Markets → Place Predictions → Watch and Earn, making it easy for anyone to get started.",
      icon: "/img/how_work/variant=4.svg",
    },
    {
      title: "Dynamic Market Prices",
      description:
        "Prices change based on demand, just like a stock market, adding excitement and opportunity to every trade.",
      icon: "/img/how_work/variant=5.svg",
    },
    {
      title: "Skill Over Luck",
      description:
        "Success depends on strategy, research, and being informed, not just luck — rewarding users who stay sharp.",
      icon: "/img/how_work/variant=6.svg",
    },
    {
      title: "Real-Time Trading",
      description:
        "Users can experience live price changes and instant updates, making the platform fast, interactive, and exciting.",
      icon: "/img/how_work/variant=7.svg",
    },
  ];

  return (
    <section className="text-white bg-black bg-neutral-900 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-sans">How OneTrade Works</h2>
        <p className="text-muted mt-4 max-w-3xl mx-auto">
          Discover the key features that make OneTrade the ultimate platform for
          opinion trading, where strategy meets opportunity!
        </p>
      </div>

      {/* Features Grid */}
      <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="work-card p-3 flex flex-col items-start">
            <div className="block mr-auto">
              <img
                src={feature.icon}
                alt={feature.title}
                className="max-w-full h-auto block mr-auto"
              />
              <p className="text-3xl arial-regular text-light-gray mb-3">
                {feature.title}
              </p>
            </div>
            <p className="text-muted roboto-normal leading-normal text-xl w-5/6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
