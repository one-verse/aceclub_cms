"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
export const TraitsGrid = (props: any) => {
  return (
    <section
      id="how-it-works"
      className="gredientBg bg-neutral-900 p-2 py-12 text-white md:p-5 scroll-mt-20"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="font-sans text-2xl md:text-5xl">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid max-w-7xl max-w-[1200px] grid-cols-5 gap-4 px-4">
        {props.traits.map((feature: any, index: number) => (
          <div
            key={index}
            className="work-card flex items-start space-x-1 p-3 md:flex-col md:space-x-0 text-center"
          >
            <div className="mr-auto block flex flex-col items-center mx-auto">
              <Image
                src={strapiImage(feature.icon.url)}
                width={100}
                height={100}
                alt={feature.icon.alternativeText || ""}
                className="mb-4 block h-auto max-w-full"
              />
            </div>
            <div className="work-card-body w-full">
              <p className="text-light-gray mb-1 text-xl">
                {feature.title}
              </p>
              <div className="text-muted poppins-normal text-sm leading-normal">
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
