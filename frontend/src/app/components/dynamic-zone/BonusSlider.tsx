"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import clsx from "clsx";
import Link from "next/link";

interface BonusSliderItem {
  id: number;
  bonusTag: string;
  bonusTitle: string;
  bonusDesc: string;
  bonusPackage: string;
  bonusIcon?: {
    url: string;
    width: number;
    height: number;
    name?: string;
  };
  bonusBgImg?: {
    url: string;
  }
  
}
interface ReadMoreItem {
  id: number;
  title: string;
  link: string;
}
interface BonusSliderProps {
  bonusSliderTitle:string;
  allBonus: BonusSliderItem[];
  readMore:any;
}

export const BonusSlider = (props: BonusSliderProps) => {
  const readMoreData = props.readMore?.[0];
  return (
    <section className="bonusSliderRow py-10">
      {/* Title */}
      <div className="bonusSliderTitle max-w-6xl mx-auto flex items-center justify-center gap-3">
        <h2 className="text-2xl font-bold">{props.bonusSliderTitle}</h2>
      </div>

      {/* Slider */}
      <div className="allBonusSider max-w-6xl mx-auto">
          {props.allBonus?.length > 0 && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {props.allBonus.map((bonus) => (
                <SwiperSlide key={bonus.id}>
                  <div className={clsx("slideItemBox", bonus.bonusTag)} 
                  // style={{
                  //   backgroundImage: bonus.bonusBgImg?.url
                  //     ? `url(${strapiImage(bonus.bonusBgImg.url)})`
                  //     : "none",
                  //   backgroundSize: "cover",
                  //   backgroundRepeat: "no-repeat",
                  //   backgroundPosition: "center",
                  // }}
                  >
                    {/* Content */}
                    <div className="text-sm bonusPackage">
                      {/* <span>{bonus.bonusPackage}</span> */}
                    </div>
                    <div className="slideDesc">
                      {/* <h3>{bonus.bonusTitle}</h3> */}
                      <div className="text-theme" dangerouslySetInnerHTML={{ __html: bonus.bonusDesc }}>
                      </div>
                    </div>
                    {/* Image */}
                    {bonus.bonusIcon?.url && (
                      <Image
                        src={strapiImage(bonus.bonusIcon.url)}
                        alt={bonus.bonusTitle}
                        className="bonusIcon"
                        fill
            style={{ objectFit: "contain" }}
                        // width={60}
                        // height={60}
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
      </div>
     {readMoreData?.title && (
      <div className="readBtn text-center">
        <Link
          className="normalBtn inline-block"
          href={readMoreData.link}
        >
          {readMoreData.title}
        </Link>
      </div>
    )}
    </section>
  );
};

export default BonusSlider;
