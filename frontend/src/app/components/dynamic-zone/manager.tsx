"use server";
import React from "react";
import dynamic from "next/dynamic";

interface DynamicZoneComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
}

const componentMapping: { [key: string]: any } = {
  "dynamic-zone.carousel": dynamic(() =>
    import("./Carousel").then((mod) => mod.Carousel)
  ),
  "dynamic-zone.mega-section": dynamic(() =>
    import("./MegaSection").then((mod) => mod.MegaSection)
  ),
  "dynamic-zone.categories-grid": dynamic(() =>
    import("./CategoriesGrid").then((mod) => mod.CategoriesGrid)
  ),
  "dynamic-zone.content-block": dynamic(() =>
    import("./ContentBlock").then((mod) => mod.ContentBlock)
  ),
  "dynamic-zone.traits-grid": dynamic(() =>
    import("./TraitsGrid").then((mod) => mod.TraitsGrid)
  ),
  "dynamic-zone.faq-section": dynamic(() =>
    import("./FAQSection").then((mod) => mod.FAQSection)
  ),
  "dynamic-zone.blog-section": dynamic(() =>
    import("./BlogSection").then((mod) => mod.BlogSection)
  ),
  "dynamic-zone.why-choose-us": dynamic(() =>
    import("./WhyChooseUs").then((mod) => mod.WhyChooseUs)
  ),
  "dynamic-zone.our-premier": dynamic(() =>
    import("./OurPremier").then((mod) => mod.OurPremier)
  ),
  "dynamic-zone.promotions": dynamic(() =>
    import("./Promotions").then((mod) => mod.Promotions)
  ),
  "dynamic-zone.gaming-zone": dynamic(() =>
    import("./GamingZone").then((mod) => mod.GamingZone)
  ),
  "dynamic-zone.rummy-video": dynamic(() =>
    import("./RummyVideo").then((mod) => mod.RummyVideo)
  ),
  "dynamic-zone.tab-trait-section": dynamic(() =>
    import("./TabTraitSection").then((mod) => mod.TabTraitSection)
  ),
  "dynamic-zone.bonus-slider": dynamic(() =>
    import("./BonusSlider").then((mod) => mod.BonusSlider)
  ),
  "dynamic-zone.players-reviews": dynamic(() =>
    import("./PlayersReviews").then((mod) => mod.PlayersReviews)
  ),
  "dynamic-zone.home-banner": dynamic(() =>
    import("./HomeBanner").then((mod) => mod.HomeBanner)
  ),
  "dynamic-zone.footer-top-demo": dynamic(() =>
    import("./FooterTopSection").then((mod) => mod.FooterTopSection)
  ),
};

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone }) => {
  return (
    <div>
      {dynamicZone.map((componentData) => {
        const Component = componentMapping[componentData.__component];
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return (
          <Component
            key={componentData.id + componentData.__component}
            {...componentData}
          />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;
