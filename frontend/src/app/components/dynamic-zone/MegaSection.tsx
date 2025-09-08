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
      <div className={clsx("container max-w-6xl mx-auto", props.RHSImage ? "flex flex-col md:flex-row items-center md:items-center space-y-10 md:space-y-0 md:space-x-12" : "p-4 md:p-20")}>
        {/* Image Box */}
        {props.RHSImage && (
          <div className="w-full md:w-1/2 howToPLayImg order-2 md:order-1">
            <Image
              className="mx-auto block h-auto max-w-full"
              src={strapiImage(props.RHSImage?.url) || "/placeholder.png"}
              width={500}
              height={300}
              alt="How to Play"
            />
          </div>
        )}
        {/* Content Box */}
        <div className={clsx("w-full", props.RHSImage ? "md:w-1/2" : "md:w-11/12", "howToPLayLeft order-1 md:order-2")}>
          {props.title && (
            <h5 className="mb-6 text-left text-2xl md:text-2xl font-semibold text-white">
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
              className="normalBtn"
              href={props.PlayButton.link}
            >
              {props.PlayButton.title}
            </Link>
          )}
        </div>
      </div>

    </section>
  );
};

export default MegaSection;
