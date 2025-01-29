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
    <section className="container max-w-[1200px] mx-auto text-white py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl poppins-regular">
          Explore Our Top Trading Categories
        </h2>
        <p className="text-muted text-lg my-5">
          From big predictions to everyday insights, trade in the most exciting
          markets and beyond.
        </p>
      </div>

      {/* Categories */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-20 my-5"> */}
      <div className="flex flex-row flex-wrap content-start justify-center items-end my-5 space-y-20">
        {categories.map((category, index) => (
          <div key={index} className="tag-card-wrapper basis-1/4 p-1">
            <div className="tag-card h-full flex items-end column">
              <img
                src={category.image}
                alt={category.title}
                className="tag-img"
              />
              <div className="p-4 text-center tag-card-footer">
                <p className="text-3xl font-semibold poppins-bold text-white">
                  {category.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center mt-10 gap-6 px-4 md:w-3/4 mx-auto">
        {filters.map((filter, index) => (
          <a key={index} className="filter text-muted p-5 pl-12 text-xl">
            {filter}
          </a>
        ))}
      </div>
    </section>
  );
}
