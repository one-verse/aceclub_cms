"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
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
    "container max-w-[1040px] mx-auto destinationBg",
    props.RHSImage
      ? "flex flex-col md:flex-row items-center md:items-start p-4 md:p-10 space-y-10 md:space-y-0 md:space-x-12"
      : "p-4 md:p-20"
  )}
>
  {/* Content Box */}
  <div className={clsx("w-full", props.RHSImage ? "md:w-1/2" : "md:w-11/12", "destinationLeft")}>
    {props.title && (
      <h5 className="mb-6 text-left text-3xl md:text-5xl font-semibold leading-tight text-theme-red">
        {props.title}
      </h5>
    )}

    {props.description && (
      <div
        className="text-theme"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    )}

    {props.PlayButton && props.PlayButton.title && (
      <Link
        className="btn primary-green text-black font-medium text-sm px-5 py-2.5 text-center w-50 mt-6 inline-block"
        href={props.PlayButton.link}
      >
        {props.PlayButton.title}
      </Link>
    )}
  </div>

  {/* Image Box */}
  {props.RHSImage && (
    <div className="w-full md:w-1/2 destinationImgBox">
      <Image
        className="mx-auto block h-auto max-w-full"
        src={strapiImage(props.RHSImage?.url) || "/placeholder.png"}
        width={500}
        height={300}
        alt="Next Poker Destination"
      />
    </div>
  )}
</div>

    </section>
  );
};

export default MegaSection;
