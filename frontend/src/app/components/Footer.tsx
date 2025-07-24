"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { strapiImage } from "../../../lib/strapi/strapiImage";

export default function Footer({ FooterData }: { FooterData: any }) {
  const pathname = usePathname();

  const {
    footerCopyRight,
    footerLogo,
    Game,
    Info,
    socialMedia,
    DownloadItem,
    footerSocial,
  } = FooterData;

  const logoUrl = footerLogo?.formats?.small?.url || footerLogo?.url;

  const isActive = (link: string) => {
    const normalize = (url: string) => url.replace(/\/+$/, "") || "/";
    return normalize(pathname) === normalize(link);
  };

  return (
    <footer className="footerBg pt-10 pb-20 md:py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* ✅ Logo */}
        {logoUrl && (
          <div className="mb-6">
            <Link href="/">
              <img
                src={strapiImage(logoUrl)}
                alt="Footer Logo"
                className="mx-auto mb-4"
                width={100}
                height={100}
              />
            </Link>
          </div>
        )}

        {/* ✅ Grid Layout for lg (5 col), md (2 col + full), sm (1 col) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6 text-left">

          {/* Info */}
          <div>
            <h5 className="font-semibold mb-2">{Info.footerTitleNav}</h5>
            {Info?.items?.map((item: any) => (
              <Link
                key={item.id}
                href={item.link}
                target={item.target}
                className={`block text-xs md:text-sm mb-1 ${
                  isActive(item.link)
                    ? "activeBtn"
                    : "text-theme hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Game */}
          <div>
            <h5 className="font-semibold mb-2">{Game.footerTitleNav}</h5>
            {Game?.items?.map((item: any) => (
              <Link
                key={item.id}
                href={item.link}
                target={item.target}
                className={`block text-xs md:text-sm mb-1 ${
                  isActive(item.link)
                    ? "activeBtn"
                    : "text-theme hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Download */}
          <div>
            <h5 className="font-semibold mb-2">{DownloadItem.footerTitleNav}</h5>
            {DownloadItem?.items?.map((item: any) => (
              <Link
                key={item.id}
                href={item.link}
                target={item.target}
                className={`block text-xs md:text-sm mb-1 ${
                  isActive(item.link)
                    ? "activeBtn"
                    : "text-theme hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Social Media */}
          <div>
            <h5 className="font-semibold mb-2">{socialMedia.footerTitleNav}</h5>
            {socialMedia?.items?.map((item: any) => (
              <Link
                key={item.id}
                href={item.link}
                target={item.target}
                className={`block text-xs md:text-sm mb-1 ${
                  isActive(item.link)
                    ? "activeBtn"
                    : "text-theme hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Social Icons (always 1 column — spans full row on md) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex flex-wrap flex-col gap-3 socialFooter">
              <div className="socialItemBox">
                {footerSocial.SocialItem?.items?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target={item.target}
                    className="text-gray-400 hover:text-white"
                  >
                    <img
                      src={strapiImage(item.socialIcon.url)}
                      alt=""
                    />
                  </Link>
                ))}
              </div>
              <div className="certificateBox">
                {footerSocial.certificate?.items?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target={item.target}
                    className="text-gray-400 hover:text-white"
                  >
                    <img
                      src={strapiImage(item.socialIcon.url)}
                      alt=""
                    />
                  </Link>
                ))}
              </div>
              <div className="paymentBox">
                <h5>{footerSocial.payments.footerTitleNav}</h5>
                {footerSocial.payments?.items?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target={item.target}
                    className="text-gray-400 hover:text-white"
                  >
                    <img
                      src={strapiImage(item.socialIcon.url)}
                      alt=""
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Copyright */}
        {footerCopyRight && (
          <div className="text-xs text-theme footerCopy">
            <p>{footerCopyRight}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
