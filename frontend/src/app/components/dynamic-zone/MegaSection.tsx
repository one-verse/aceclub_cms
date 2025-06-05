"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface MegaSectionType {
  title: string;
  description: string;
  variant: string;
  RHSImage: any;
  PlayButton:any;
}

export const MegaSection = (props: MegaSectionType) => {
  return (
    <section className={clsx(`variant-${props.variant}`)}>
      <div
        className={clsx(
          "container max-w-[1400px] mx-auto md:px-20",
          props.RHSImage
            ? "flex flex-col md:flex-row content-center items-center p-4 w-full mx-auto md:space-x-12"
            : "p-4 md:p-20"
        )}
      >
        <div className={clsx(!props.RHSImage ? "md:w-11/12" : "basis-1/2")}>
          {props.title && (
            <p className="font-sans mb-6 text-left text-3xl font-semibold leading-tight text-white md:text-5xl text-theme-yellow">
              {props.title}
            </p>
          )}
          {props.description && (
            <div
              className="text-theme"
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></div>
          )}
          {props.PlayButton && (
            
            <div
              className=""
              // dangerouslySetInnerHTML={{ __html: props.PlayButton.title }}
              
            >
              <Link className="btn primary-green text-black font-medium text-sm px-5 py-2.5 text-center w-32 mt-6 block" href={props.PlayButton.link}>
                {props.PlayButton.title}
              </Link>
            </div>
          )}
        </div>
        {props.RHSImage && (
          <div className="">
            <Image
              className="mx-auto block h-auto max-w-full"
              src={"/img/tell_us.webp"}
              width={500}
              height={100}
              alt="girl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MegaSection;
