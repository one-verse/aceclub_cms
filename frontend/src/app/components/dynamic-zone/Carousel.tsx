"use client";

import { strapiImage } from "../../../../lib/strapi/strapiImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//import GreenBtn from "../shared/GreenBtn";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { ContentBlock } from "./ContentBlock";

export const Carousel = (props: any) => {
  return (
    <>
      <section className="container mx-auto max-w-[1400px]">
        <div className="full-swiper relative h-full sm:h-96 md:h-auto">
          <Swiper
            className="w-full"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            direction="horizontal"
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
          >
            {props.slides.map((slide: any, slideIndex: number) => {
              const link = slide.link || "https://exchange.onetrade.live/category/all";
              const target = slide.target === "blank" ? "_blank" : "_self";

              return (
                <SwiperSlide key={slideIndex}>
                  <div className="swiper-caption column absolute flex content-start space-y-4 p-4 md:content-center md:space-y-6 md:ps-20 z-10">
                    <p className="text-light-gray font-sans mb-4 text-3xl leading-tight md:text-6xl">
                      {slide.title}
                    </p>
                    <div className="text-muted poppins-normal text-base md:text-3xl">
                      <ContentBlock content={slide.description} />
                    </div>
                    {/* <GreenBtn
                      title="Signup & Trade Live!"
                      url={"https://exchange.onetrade.live"}
                      target="_blank"
            rel="noopener noreferrer"
                    /> */}
                  </div>

                 
                  <a href={link} target={target} rel="noopener noreferrer">
                    <picture>
                      <source
                        srcSet={strapiImage(slide.mobileImage?.url)}
                        media="(max-width: 768px)"
                      />
                      <Image
                        src={strapiImage(slide.desktopImage?.url)}
                        alt="main_banner"
                        width={1200}
                        height={800}
                        className="swiper-slide-img h-auto w-full object-cover"
                        priority
                      />
                    </picture>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
