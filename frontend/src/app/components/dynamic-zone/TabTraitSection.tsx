"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { strapiImage } from "../../../../lib/strapi/strapiImage";

interface TabDetailType {
  id: number;
  tabBtnTitle: string;
  tabDescTitle: string;
  greenTag: string;
  orangeTag: string;
  tabDescContent: string;
  tabRelatedImg: {
    url: string;
    alternativeText?: string;
  };
}

interface TabTraitSectionType {
  TabTraitTitle: string;
  tabDetails: TabDetailType[];
}

export const TabTraitSection = ({ TabTraitTitle, tabDetails }: TabTraitSectionType) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="tabSection py-10">
      {/* Title */}
      <div className="tabSectionTitle max-w-6xl mx-auto mb-6">
        <h2 className="text-2xl font-bold text-theme">{TabTraitTitle}</h2>
      </div>

      <div className="tabRow container max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="tabItemBtn flex gap-4">
          {tabDetails.map((tab, idx) => (
            <button key={tab.id} onClick={() => setActiveIndex(idx)} className={clsx( activeIndex === idx ? "activeBtn" : "")}>{tab.tabBtnTitle}</button>
          ))}
        </div>

        {/* Active Tab Content */}
        {tabDetails.length > 0 && (
          <div className="mt-6 flex flex-col items-center md:flex-row  gap-4">
            {/* Image */}
            <div className="tabImgBox w-full md:w-1/2 order-1 md:order-2 flex">
              <Image
                src={strapiImage(tabDetails[activeIndex].tabRelatedImg.url)}
                alt={
                  tabDetails[activeIndex].tabRelatedImg.alternativeText ||
                  tabDetails[activeIndex].tabDescTitle
                }
                width={500}
                height={400}
                className="w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {tabDetails[activeIndex].tabDescTitle}
                </h3>
                <div className="tagItem flex items-center gap-4">
                  <span className="bg-green text-xs">
                    {tabDetails[activeIndex].greenTag}
                  </span>
                  <span className="bg-orange text-xs">
                    {tabDetails[activeIndex].orangeTag}
                  </span>
                </div>
                <div className="tabCntDesc text-theme"
                  dangerouslySetInnerHTML={{
                    __html: tabDetails[activeIndex].tabDescContent,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabTraitSection;
