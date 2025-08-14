"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
export const TraitsGrid = (props: any) => {
  const afterBgImg = props.afterBgImg;
  return (
    <section
      id="how-it-works"
      className="featureBg bg-neutral-900 p-2 py-12 text-white scroll-mt-20"
    >
      {afterBgImg?.url && (
        <div className="afterFeatureImg">
          <img src={strapiImage(afterBgImg.url)} />
        </div>
      )}
      {/* Header */}
      <div className="mb-10 text-left container mx-auto max-w-[1200px] px-4">
        <h2 className="font-sans text-2xl md:text-2xl">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="FeatureItem flex overflow-x-auto md:overflow-visible md:flex-wrap gap-6">
          {props.traits.map((feature: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-[25%] sm:w-[18%] md:w-[14%] flex flex-col items-center text-center"
            >
              <Image
                src={strapiImage(feature.icon.url)}
                width={100}
                height={100}
                alt={feature.icon.alternativeText || ""}
                className="mb-4 h-auto max-w-full featureIcon"
              />
              {/* <p className="text-light-gray mb-1 text-sm md:text-xl">{feature.title}</p> */}
              <div className="text-white poppins-normal text-xs md:text-sm leading-normal">
                <ContentBlock content={feature.description} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
export default TraitsGrid;
