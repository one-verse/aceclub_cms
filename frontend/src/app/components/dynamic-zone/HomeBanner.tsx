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

interface HomeSliderItem {
  id: number;
  bannerSliderImg: {
    id: number;
    url: string;
    width: number;
    height: number;
    name?: string;
  };
}
interface BannerItemDetail {
  id: number;
  bannerItemTitle: string;
  bannerItemDesc: string;
}

interface HomeBannerType {
  bannerTitle:string;
  bannerSubTitle:string;
  bannerTrust:string;
  homeSlider?: HomeSliderItem[];
  bannerItemDetail?:BannerItemDetail[];
  downloadApp?:{
    link:string;
    target?:string;
    socialIcon?: {
      url:string;
    }
  };
}

export const HomeBanner = (props: HomeBannerType) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ simple mobile number validation
  const isValidPhone = (num: string) => /^[0-9]{10}$/.test(num);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // only allow digits
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);

    // clear messages when typing
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhone(phoneNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("https://weback.rummy777.com/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!res.ok) throw new Error("Failed to send SMS");

      setSuccess("SMS sent successfully!");
      setPhoneNumber(""); // clear input
    } catch (err) {
      setError("Failed to send SMS");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="homeBanner">
      {/* Slider + Content */}
      <div
        className={clsx( "container max-w-6xl mx-auto", props.homeSlider ? "flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-0" : "p-4")}>
        {/* Slider */}
        <div className="homeBannerSlider w-full md:w-1/2 order-1 md:order-2">
          {props.homeSlider && props.homeSlider.length > 0 && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {props.homeSlider.map((slide) => (
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
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>


        {/* Content */}
        <div className={clsx( "w-full", props.homeSlider ? "md:w-1/2" : "md:w-11/12", "homeBannerCnt order-2 md:order-1" )}>
          <div className="bannerTitle">
            <h1>{props.bannerTitle}</h1>
            <h3>{props.bannerSubTitle}</h3>
          </div>
          {/* <div className="bannerForm">
            <form onSubmit={handleSubmit} className="flex items-center justify-start gap-3">
              <div className="inputDiv">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="px-3 py-2 rounded-md w-64"
                  maxLength={10}
                />
              </div>
              <div className="getSms">
                <button
                  type="submit"
                  disabled={loading  || phoneNumber.length !== 10}
                  className="bg-green-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get SMS with Download link"}
                </button>
              </div>
              {error && <p className="errorMsg text-sm text-red-500 ml-3">{error}</p>}
              {success && <p className="sucessMsg text-sm text-green-600 ml-3">{success}</p>}
            </form>
          </div> */}
          <div className="getSms">
          <GreenBtn
              title="Download Now"
              url={
                /iPad|iPhone|iPod/.test(window.navigator.userAgent)
                  ? "https://www.rummy777.com/downloads/rummy777.apk"
                  : /Android/i.test(window.navigator.userAgent)
                  ? "https://www.rummy777.com/downloads/rummy777.apk"
                  : "https://www.rummy777.com/downloads/rummy777.apk"
              }
              target="_blank"
            />
            </div>
          <div className="trustSection">
            <div dangerouslySetInnerHTML={{ __html: props.bannerTrust }}></div>
            {/* {props.downloadApp && props.downloadApp.socialIcon && (
                <Link
                  className="inline-block"
                  href={props.downloadApp.link}
                >
                  <Image
                      src={strapiImage(props.downloadApp.socialIcon.url)}
                      alt=""
                      width={150}
                      height={44}
                      className="mx-auto"
                    />
                </Link>
              )} */}
          </div>
          {props.bannerItemDetail && props.bannerItemDetail.length > 0 && (
          <div className="bannerItemDetail flex align-center justify-between">
            {props.bannerItemDetail.map((item)=> (
              <div key={item.id}  className="bannerItem">
              <h4>{item.bannerItemTitle}</h4>
              <div className="text-theme" dangerouslySetInnerHTML={{ __html: item.bannerItemDesc }}></div>
            </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
