"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenBtn from "../GreenBtn";
import { strapiImage } from "../../../../../lib/strapi/strapiImage";
import { usePathname } from "next/navigation";

interface NavItem {
  id: number;
  title: string;
  link: string;
  target: string;
}

const Navbar = ({
  logo,
  items,
  navRHS,
  support,
}: {
  logo: any;
  items: NavItem[];
  navRHS: NavItem[];
  support: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <>
      <header className="h-full w-full roboto-normal p-2 md:px-20 sticky top-0 z-40 bgHeader">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="navbar-brand">
            <Link href="/">
              <Image
                width={168}
                height={32}
                src={strapiImage(logo.url)}
                alt="Rummy777"
                className="max-w-48 md:max-w-64 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5">
            <ul className="flex space-x-5 items-center">
              {items.map((el) => (
                <li key={el.id} className="navLink">
                  <Link
                    href={el.link}
                    target={el.target}
                    className={`roboto-normal ${
                      isActive(el.link) ? "active-link" : ""
                    }`}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex gap-x-2">
              {navRHS.map((item) => (
                <li key={item.id}>
                  <GreenBtn
                    title={item.title}
                    url={
                      /iPad|iPhone|iPod/.test(window.navigator.userAgent)
                        ? "https://apps.apple.com/in/app/calling-station-poker-game/id6747385318"
                        : /Android/i.test(window.navigator.userAgent)
                        ? "https://cdn.callingstation.co.in/releases/android/CallingStation.apk"
                        : "https://cdn.callingstation.co.in/releases/desktop/CallingStation.exe"
                    }
                    target={item.target}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* ✅ Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-1 space-y-2 bgTheme absolute w-full px-5 py-8 left-0 top-30">
            <ul className="flex flex-col space-y-3">
              {items.map((el) => (
                <li key={el.id}>
                  <Link
                    href={el.link}
                    target={el.target}
                    className={`block roboto-normal ${
                      isActive(el.link) ? "active-link" : ""
                    }`}
                    onClick={() => setMenuOpen(false)} // ✅ CLOSE MENU ON LINK CLICK
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ✅ Fixed Mobile Download Button */}
      {navRHS.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 footerDownload">
          <GreenBtn
            title={navRHS[0].title}
            url={
              /iPad|iPhone|iPod/.test(window.navigator.userAgent)
                ? "https://apps.apple.com/in/app/calling-station-poker-game/id6747385318"
                : /Android/i.test(window.navigator.userAgent)
                ? "https://cdn.callingstation.co.in/releases/android/CallingStation.apk"
                : "https://cdn.callingstation.co.in/releases/desktop/CallingStation.exe"
            }
            target={navRHS[0].target}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
