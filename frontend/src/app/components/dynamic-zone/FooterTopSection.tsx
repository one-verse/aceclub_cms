"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import GreenBtn from "../shared/GreenBtn";
interface footerTopData {
  mainTitle:string
  footerTopDesc: string;
  variant: string;
  footerTopImg: any;
  demoBtn:any;
}

export const FooterTopSection = (props: footerTopData) => {
  return (
    <section className="footerTopMain">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="footerTopRow">
          <div className="footerTopLeft">
            <h3>{props.mainTitle}</h3>
            {props.footerTopDesc && (
              <div
              className="text-theme"
              dangerouslySetInnerHTML={{ __html: props.footerTopDesc }}
            />
            )}
            {props.demoBtn && (
              // <Link
              //   className="normalBtn"
              //   href={props.demoBtn.link}
              // >
              //   {props.demoBtn.title}
              // </Link>

              <GreenBtn
                title={props.demoBtn.title}
                url={props.demoBtn.link}
                target={props.demoBtn.target || "_self"}
              />
            )}
          </div>
          <div className="footerTopRight">
            {props.footerTopImg && (
              <Image
                className="mx-auto block h-auto max-w-full"
                src={strapiImage(props.footerTopImg?.url) || ""}
                width={400}
                height={325}
                alt="Bruno"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTopSection;
