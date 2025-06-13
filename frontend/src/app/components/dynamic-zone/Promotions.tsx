"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
import Link from "next/link";
import { useState } from "react";
export const Promotions = (props: any) => {
   const {
    sectionTitle,
    sectionDescription,
    Promotion,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      id="Promotions"
      className="themeGredient1 text-white scroll-mt-20">
      {/* Header */}
      {/* <div className="mb-20 text-center">
        <h2 className="font-sans text-2xl md:text-4xl mb-8 text-theme-yellow">
          {props.sectionTitle || ""}
        </h2>
        {props.sectionDescription && (
          <div className="text-muted mx-auto mt-4 max-w-3xl">
            <ContentBlock content={props.sectionDescription} />
          </div>
        )}
      </div> */}

      {/* Features Grid */}
      <div className="container mx-auto grid max-w-7xl max-w-[1200px] grid-cols-1 w-full md:w-4/5 md:grid-cols-2 px-4 gap-2">
        {/* Promotion Cards */}
      {props.Promotion.map((feature: any, index: number) => (
        <div key={index} className="promotionBox relative z-0">
          <div className="mr-auto block items-center mx-auto">
            <Image
              src={strapiImage(feature.promotionImage.url)}
              width={500}
              height={214}
              alt={feature.promotionImage.alternativeText || ""}
              className="block h-auto max-w-full rounded-t-sm"
            />
          </div>

          <div className="w-full flex justify-between px-2 py-2">
            <Link
              className="text-white text-xs border rounded-md px-5 py-2.5 text-center"
              href={feature.PlayButton.link}
            >
              {feature.PlayButton.title}
            </Link>

            <div className="text-white text-xs border rounded-md px-5 py-2.5 text-center transition-all cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              {feature.knowMore}
            </div>
          </div>
        </div>
      ))}

      {/* Full-Screen Modal */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 px-10 py-10">
          <div className="modelBg text-white p-6 rounded-xl w-full md:w-3/5 shadow-lg animate-fade-in relative ">
            <div className="text-white text-center text-xs mx-auto mt-4 max-w-3xl">
              <ContentBlock content={props.Promotion[openIndex].knowMoreContent} />
            </div>
            <div className="text-center block mt-6">
              <button
                onClick={() => setOpenIndex(null)}
                className="btn primary-green text-black m-auto font-medium text-md px-2 py-2 text-center w-32 mt-6 block cursor-pointer">Close</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};
export default Promotions;
