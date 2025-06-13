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
  const primierBoxBgImg = primierBoxBg?.url
    ? strapiImage(primierBoxBg.url)
    : "";
    const primierBgImg = primierBg?.url
    ? strapiImage(primierBg.url)
    : "";
  return (
    <section
      id="how-it-works"
      className="themeGredient px-12 py-12 text-white md:p-12 scroll-mt-20"
       style={{
        backgroundImage:`url('${primierBgImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="font-sans text-2xl md:text-4xl mb-8 text-theme-yellow">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid max-w-7xl max-w-[1200px] grid-cols-1 md:grid-cols-4 px-4">
        {props.traits.map((feature: any, index: number) => (
          <div
            key={index}
            className="primier-card flex flex-col items-start space-x-1 p-3 md:space-x-0 gap-4"
            style={{
              backgroundImage:`url('${primierBoxBgImg}')`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
            }}  
          >
            <div className="mr-auto block flex flex-col items-center mx-auto">
              <Image
                src={strapiImage(feature.icon.url)}
                width={160}
                height={160}
                alt={feature.icon.alternativeText || ""}
                className="block h-auto max-w-full primierIcon"
              />
            </div>
            <div className="primier-desc w-full text-center">
              <span className="text-white text-md">
                {feature.title}
              </span>
              <div className="text-white roboto-normal text-xs leading-normal">
                <ContentBlock content={feature.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurPremier;
