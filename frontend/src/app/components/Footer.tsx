"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { strapiImage } from "../../../lib/strapi/strapiImage";

export default function Footer({ FooterData }: { FooterData: any }) {
  const pathname = usePathname();

  const {
    footerCopyRight,
    Game,
    Info,
    support,
    footerSocial,
    copyRights,
    banStates,
    bronzeVip,
    bronzeIcon,
    bronzeText,
    footerPotImg,
  } = FooterData;

  // const logoUrl = footerLogo?.formats?.small?.url || footerLogo?.url;

  const isActive = (link: string) => {
    const normalize = (url: string) => url.replace(/\/+$/, "") || "/";
    return normalize(pathname) === normalize(link);
  };

  return (
    <footer>
      <div className="bronzeFooter pt-10 pb-20 md:py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

            {/* Left column — Title & Text */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{bronzeVip.bronzeTitle}</h2>
              <div
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bronzeVip.bronzeText }}
              ></div>
            </div>

            {/* Right column — Icon */}
            <div className="flex justify-center sm:justify-end">
              {bronzeVip?.bronzeIcon?.url && (
                <img
                  src={strapiImage(bronzeVip.bronzeIcon.url)}
                  alt="Bronze VIP"
                  className="w-full max-w-xs"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footerBg pt-10 pb-20 md:py-10 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* ✅ Grid Layout for lg (5 col), md (2 col + full), sm (1 col) */}
          <div className="container max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* ===== Left Section ===== */}
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-left">
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

                  {/* Support */}
                  <div>
                    <h5 className="font-semibold mb-2">{support.footerTitleNav}</h5>
                    {support?.items?.map((item: any) => (
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
                </div>

                {/* Social + Copyright */}
                <div className="flex flex-col gap-3">
                  <div className="copyRightTex">
                    <div
                      dangerouslySetInnerHTML={{ __html: footerSocial.copyRights }}
                    ></div>
                  </div>
                  <div className="socialItemBox flex gap-3">
                    {footerSocial.SocialItem?.items?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        target={item.target}
                        className="text-gray-400 hover:text-white"
                      >
                        <img src={strapiImage(item.socialIcon.url)} alt="" />
                      </Link>
                    ))}
                  </div>
                  {/* <div className="certificateBox flex gap-3">
                    {footerSocial.certificate?.items?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        target={item.target}
                        className="text-gray-400 hover:text-white"
                      >
                        <img src={strapiImage(item.socialIcon.url)} alt="" />
                      </Link>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* ===== Right Section (Image) ===== */}
              <div className="footerPotImg flex justify-center lg:justify-end">
                <img src={strapiImage(footerPotImg.url)} alt="" />
              </div>
            </div>
          </div>


          {/* ✅ Copyright */}
          {banStates && (
            <div className="text-xs text-theme footerCopy">
              <p dangerouslySetInnerHTML={{ __html:banStates,}}></p>
            </div>
          )}
        </div>
      </div>
      {/* <div className="bronzeFooter pt-10 pb-20 md:py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <h2>{bronzeVip.bronzeTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: bronzeVip.bronzeText }}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {bronzeVip?.bronzeIcon?.url && (
              <img
                src={strapiImage(bronzeVip.bronzeIcon.url)}
                alt="Bronze VIP"
                className="w-full max-w-xs"
              />
            )}
        </div>
      </div> */}
    </footer>
  );
}
