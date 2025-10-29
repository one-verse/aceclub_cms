"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import Link from "next/link";
import GreenBtn from "../shared/GreenBtn";

interface DemoButton {
  id: number;
  title: string;
  link: string;
  target?: string;
}
interface HomeSliderItem {
  id: number;
  bannerSliderImg: {
    id: number;
    url: string;
    width: number;
    height: number;
    name?: string;
  };
  bannerTitle: string;
  bannerSubTitle: string;
  demoBtn?: DemoButton[];

}
interface BannerItemDetail {
  id: number;
  bannerItemTitle: string;
  bannerItemDesc: string;
}

interface HomeBannerType {
  homeSlider?: HomeSliderItem[];
  bannerItemDetail?:BannerItemDetail[];
}

export const HomeBanner = (props: HomeBannerType) => {
  return (
    <section className="homeBanner">
          {props.homeSlider && props.homeSlider.length > 0 && (
          <div className="homeBannerSlider">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {props.homeSlider.map((slide) => (
                <div className="slideItem" key={slide.id}>
                <SwiperSlide key={slide.id}>
                  {slide.bannerSliderImg?.url && (
                    <Image
                      src={strapiImage(slide.bannerSliderImg.url)}
                      width={slide.bannerSliderImg.width || 500}
                      height={slide.bannerSliderImg.height || 300}
                      alt={slide.bannerSliderImg.name || "Slide Image"}
                      className="mx-auto"
                    />
                  )}
                  <div className="bannerCaption">
                    <h1>{slide.bannerTitle}</h1>
                    <p>{slide.bannerSubTitle}</p>
                    {slide.demoBtn && slide.demoBtn.length > 0 && (
                      <GreenBtn
                        title={slide.demoBtn[0].title}
                        url={slide.demoBtn[0].link}
                        target={slide.demoBtn[0].target || "_self"}
                      />
                    )}
                  </div>
                </SwiperSlide>
                  
              </div>
              ))}
              
            </Swiper>
          </div>
          )}
    </section>
  );
};

export default HomeBanner;
