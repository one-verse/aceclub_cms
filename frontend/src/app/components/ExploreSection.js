
"use client";
import { useState } from "react";

export default function ExploreSection() {
  const categories = [
    { title: "Sports", image: "/messi.png" },
    { title: "Celebrities", image: "/celebraty.png" },
    { title: "Technology", image: "/ROBO.png" },
    { title: "Economy", image: "/world.png" },
  ];

  const filters = [
    "Politics",
    "Stocks",
    "Cricket",
    "Movies",
    "Entertainment",
    "Food",
    "Reality TV",
    "Weather",
    "Marathons",
  ];

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
  };

  return (
    <section className="bg-black text-white py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Explore Our Top Trading Categories</h2>
        <p className="text-gray-400 mt-4">
          From big predictions to everyday insights, trade in the most exciting
          markets and beyond.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center mt-10 gap-4 px-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-full transition ${
              selectedFilter === filter
                ? "bg-pink-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Selected Filter Display (Optional) */}
      {selectedFilter && (
        <div className="text-center mt-6 text-gray-400">
          <p>
            <span className="text-pink-500 font-semibold">{selectedFilter}</span>{" "}
            filter applied.
          </p>
        </div>
      )}
    </section>
  );
}
