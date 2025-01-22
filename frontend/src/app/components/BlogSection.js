import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      title: "What is Onetrade.Live?",
      description:
        "Discover Onetrade.Live, a secure platform for opinion trading. Make predictions on trending topics and earn rewards.",
      image: "/girlchat.png", // Replace with your image path
      timeToRead: "5 min read",
      date: "Jan 14, 2024",
    },
    {
      title: "Will Southeast Asia Host the Olympics in the Next 20 Years?",
      description:
        "Explore Southeast Asia's chances of hosting the Olympics, with bids, challenges, and opportunities shaping the future.",
      image: "/olympics.png", // Replace with your image path
      timeToRead: "4 min read",
      date: "Jan 16, 2024",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Knowledge & Trends</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>{blog.timeToRead}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-300">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
