"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
export const OurPremier = (props: any) => {
   const {
    sectionTitle,
    sectionDescription,
    traits,
    primierBoxBg,
    primierBg,
  } = props;
  return (
    <section
      className="themeGredient px-12 py-12 text-white md:p-12 scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center featureTitle">
        <h2 className="font-sans text-3xl md:text-4xl mb-8 text-theme-red">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid max-w-7xl max-w-[1200px] grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {props.traits.map((feature: any, index: number) => (
          <div
            key={index}
            className="featureBox flex flex-col items-center"
          >
            {/* <Image
              src={strapiImage(feature.icon.url)}
              width={160}
              height={160}
              alt={feature.icon.alternativeText || ""}
              className="h-auto max-w-full primierIcon"
            /> */}
            <div className="w-full text-center mt-4">
              <h5>{feature.title}</h5>
              <div className="featureSmall">
                <ContentBlock content={feature.description} />
              </div>
              <div className="featureDesc">
                <ContentBlock content={feature.traitText} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
export default OurPremier;
