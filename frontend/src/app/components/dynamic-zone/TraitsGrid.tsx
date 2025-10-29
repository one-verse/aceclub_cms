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
      {/* Header */}
      <div className="mb-10 text-left container mx-auto max-w-[1200px] px-4">
        <h2 className="text-2xl md:text-2xl">
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
        <div className="FeatureItem">
          {props.traits.map((feature: any, index: number) => (
            <div key={index} className="featureBox">
              <Image
                  src={strapiImage(feature.icon.url)}
                  alt={feature.icon.alternativeText || ""}
                  width={90}
                  height={90}
                  className="featureIcon"
                />
              <h3>{feature.title}</h3>
              <div className="text-theme text-xs md:text-sm featureText">
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
