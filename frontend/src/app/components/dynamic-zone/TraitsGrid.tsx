"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
export const TraitsGrid = (props: any) => {
  return (
    <section
      id="how-it-works"
      className="bg-black bg-neutral-900 p-2 py-12 text-white md:p-5"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="poppins-medium text-2xl md:text-5xl">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid max-w-7xl max-w-[1200px] grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {props.traits.map((feature: any, index: number) => (
          <div
            key={index}
            className="work-card flex items-start space-x-1 p-3 md:flex-col md:space-x-0"
          >
            <div className="mr-auto block flex h-full basis-1/3 flex-col items-center">
              <Image
                src={strapiImage(feature.icon.url)}
                width={100}
                height={100}
                alt={feature.icon.alternativeText || ""}
                className="my-auto block h-auto max-w-full md:mr-auto"
              />
            </div>
            <div className="work-card-body basis-full">
              <p className="poppins-regular text-light-gray mb-1 text-base md:mb-3 md:text-3xl">
                {feature.title}
              </p>
              <div className="text-muted inter-normal text-sm leading-normal md:w-5/6 md:text-xl">
                <ContentBlock content={feature.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TraitsGrid;
