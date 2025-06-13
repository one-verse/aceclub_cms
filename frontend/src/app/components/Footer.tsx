import Link from "next/link";
import { strapiImage } from "../../../lib/strapi/strapiImage";

export default function Footer({ FooterData }: { FooterData: any }) {
  const {
    footerText,
    footerCopyRight,
    footerWarning,
    footerLogo,
    footerNavItems,
    socialLinks,
    usefullLinks,
  } = FooterData;

  const logoUrl = footerLogo?.formats?.small?.url || footerLogo?.url;
  return (
    <footer className="footerBg pt-10 pb-20 md:py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        {logoUrl && (
          <div>
            <Link href="/">
              <img
                src={strapiImage(logoUrl)}
                alt="Footer Logo"
                className="mx-auto mb-4"
                width={502}
                height={60}
              />
            </Link>
          </div>
        )}
        {/* Footer Text */}
        {footerText &&
          <p className="text-sm text-theme mb-8 w-full md:w-3/5 mx-auto">{footerText}</p>}

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-1 mb-6 footerNav">
          {footerNavItems?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-theme text-xs md:text-sm px-2">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="text-xs text-theme mb-6 space-y-2">
          {footerCopyRight && <p>{footerCopyRight}</p>}
        </div>
        {/* Social Links */}
        <div className="flex justify-center mb-6 gap-4">
          {socialLinks?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-gray-400 hover:text-white text-xs md:text-sm"
            >
              <img src={strapiImage(item.socialIcon.url)} className="mx-auto"  width={40}/>
            </Link>
          ))}
        </div>

        {/* usefullLinks Links */}
        <div className="flex justify-center mb-6 footerNav">
          {usefullLinks?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-theme text-xs md:text-sm px-2"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-xs text-theme space-y-2">
          {footerWarning && <p>{footerWarning}</p>}
        </div>
      </div>
    </footer>
  );
}
