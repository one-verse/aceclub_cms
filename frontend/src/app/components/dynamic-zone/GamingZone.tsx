"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { strapiImage } from "../../../../lib/strapi/strapiImage";

interface GamingZoneType {
  GamingZoneTitle: string;
  description: string;
  variant: string;
  RHSImage: any;
  GamingZoneTitleIcon: any;
  GamingZoneDesc: string;
  GamingZoneSlider?: {
    slides?: {
      id: number;
      desktopImage?: { url: string; width: number; height: number; name?: string };
    }[];
  };
}

export const GamingZone = (props: GamingZoneType) => {
  return (
    <section className="gamingZoneRow">
      {/* Title */}
      <div className="gamingZoneTitle max-w-6xl mx-auto">
        <h2>
          <img
            src={strapiImage(props.GamingZoneTitleIcon?.url) || "/placeholder.png"}
            alt="Gaming Zone"
          />
          {props.GamingZoneTitle}
        </h2>
      </div>

      {/* Slider + Content */}
      <div
        className={clsx(
          "container max-w-6xl mx-auto",
          props.GamingZoneSlider
            ? "flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12"
            : "p-4"
        )}
      >
        {/* Slider */}
        <div className="gamingZoneSlider w-full md:w-1/2 howToPLayImg order-1 md:order-2">
          {(props.GamingZoneSlider?.slides ?? []).length > 0 && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {props.GamingZoneSlider!.slides!.map((slide, idx) => (
                <SwiperSlide key={slide.id || idx}>
                  <Image
                    src={slide.desktopImage?.url ? strapiImage(slide.desktopImage.url) : "/placeholder.png"}
                    width={slide.desktopImage?.width || 500}
                    height={slide.desktopImage?.height || 300}
                    alt={slide.desktopImage?.name || "Slide Image"}
                    className="mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>


        {/* Content */}
        <div
          className={clsx(
            "w-full",
            props.RHSImage ? "md:w-1/2" : "md:w-11/12",
            "gamingZoneCnt order-2 md:order-1"
          )}
        >
          {props.GamingZoneDesc && (
            <div className="text-theme"  dangerouslySetInnerHTML={{ __html: props.GamingZoneDesc }}>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamingZone;
