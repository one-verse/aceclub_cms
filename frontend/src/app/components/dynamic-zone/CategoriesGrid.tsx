"use client";
import Image from "next/image";
import { useState } from "react";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";

export const CategoriesGrid = (props: any) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter: any) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
  };

  return (
    <section className="container mx-auto max-w-[1200px] px-4 py-10 text-white md:py-20">
      {/* Header */}
      <div className="mb-10 text-center md:mb-20">
        <h2 className="poppins-regular text-2xl md:text-5xl">
          {props.sectionTitle}
        </h2>
        <div className="text-muted my-5 text-lg">
          <ContentBlock content={props.sectionDescription} />
        </div>
      </div>

      {/* Categories */}
      {/* <div className="my-5 grid grid-cols-1 gap-x-2 gap-y-20 md:grid-cols-2 lg:grid-cols-4"> */}
      <div className="my-5 flex flex-row flex-wrap content-start items-end justify-center space-y-4 md:space-y-10">
        {props.categories.map((category: any, index: number) => (
          <div key={index} className="tag-card-wrapper p-1 md:basis-1/4">
            <div className="tag-card column flex h-full w-full items-end">
              <Image
                width={300}
                height={400}
                src={strapiImage(category.image.url)}
                alt={category.name}
                className="tag-img"
              />
              <div className="tag-card-footer p-4 text-center">
                <p className="poppins-bold text-xl font-semibold text-white md:text-3xl">
                  {category.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2 px-4 md:w-3/4 md:gap-6">
        {props.tags.map((filter: any, index: number) => (
          <a
            key={index}
            className="text-muted p-2 pl-12 text-base filter md:py-5 md:text-xl"
          >
            {filter.name}
          </a>
        ))}
      </div>
    </section>
  );
};
