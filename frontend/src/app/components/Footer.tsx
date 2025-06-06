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
    <footer className="bg-black p-8 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Logo */}
        {logoUrl && (
          <div>
            <Link href="/">
              <img
                src={strapiImage(logoUrl)}
                alt="Footer Logo"
                className="mx-auto h-20 object-contain"
              />
            </Link>
          </div>
        )}
        {/* Footer Text */}
        {footerText && <p className="text-sm text-gray-400">{footerText}</p>}

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {footerNavItems?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-muted text-sm hover:text-white">
              {item.title}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-gray-400 hover:text-white text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* usefullLinks Links */}
        <div className="flex justify-center space-x-4 mt-4">
          {usefullLinks?.items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              target={item.target}
              className="text-gray-400 hover:text-white text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-xs text-gray-600 mt-6 space-y-2">
          {footerWarning && <p>{footerWarning}</p>}
          {footerCopyRight && <p>{footerCopyRight}</p>}
        </div>
      </div>
    </footer>
  );
}
