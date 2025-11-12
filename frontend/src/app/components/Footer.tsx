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
      <div className="footerBg">
        <div className="foterSectionTop">
          <div className="container max-w-[1200px] mx-auto px-4">
            <div className="foterSectionTopRow">
              <div className="fNavSection">
                {Info?.items?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target={item.target}
                    className={`text-xs md:text-sm mb-1 ${
                      isActive(item.link)
                        ? "activeBtn"
                        : "text-theme hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="socialItemBox flex gap-3">
                {footerSocial?.SocialItem?.items?.map((item: any) => (
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
            </div>
          </div>
        </div>
        <div className="copyRightTex">
          <div dangerouslySetInnerHTML={{ __html: footerSocial?.copyRights }}></div>
        </div>
      </div>
    </footer>
  );
}
