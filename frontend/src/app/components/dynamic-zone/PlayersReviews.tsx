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
  RatingDescription:string;
  PlayerDetails:string;
  QuoteIcon?: {
    url: string;
    name?: string;
  };
  PlayerImage?: {
    url: string;
    name?: string;
  };
  
}
// interface ReadMoreItem {
//   id: number;
//   title: string;
//   link: string;
// }
interface PlayersReviewsProps {
  mainTitle:string;
  ReviewItem: BonusSliderItem[];
  readMore:any;
}

export const PlayersReviews = (props: PlayersReviewsProps) => {
  const readMoreData = props.readMore?.[0];
  return (
    <section className="playersSliderRow py-10">
      {/* Title */}
      <div className="bonusSliderTitle max-w-6xl mx-auto mb-6 flex items-center justify-center gap-3">
        <h2 className="text-2xl font-bold">{props.mainTitle}</h2>
      </div>

      {/* Slider */}
      <div className="allPlayerSider max-w-6xl mx-auto">
          {props.ReviewItem?.length > 0 && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {props.ReviewItem.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="reviewSlideItem">
                    {review.QuoteIcon?.url && (
                      <Image
                        src={strapiImage(review.QuoteIcon.url)}
                        alt={review.PlayerDetails}
                        className="quoteIcon"
                        width={18}
                        height={18}
                      />
                    )}
                    <div className="text-theme playerDesc" dangerouslySetInnerHTML={{ __html: review.RatingDescription }}></div>
                    <div className="playerDetail">
                      {review.PlayerImage?.url && (
                      <Image
                        src={strapiImage(review.PlayerImage.url)}
                        alt={review.PlayerDetails}
                        className="playerIcon"
                        width={48}
                        height={48}
                        />
                      )}
                      <p>{review.PlayerDetails}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
      </div>
     {/* {readMoreData?.title && (
      <div className="readBtn text-center">
        <Link
          className="btn primary-green text-black font-medium text-sm px-5 py-2.5 text-center w-50 mt-6 inline-block"
          href={readMoreData.link}
        >
          {readMoreData.title}
        </Link>
      </div>
    )} */}
    </section>
  );
};

export default PlayersReviews;
