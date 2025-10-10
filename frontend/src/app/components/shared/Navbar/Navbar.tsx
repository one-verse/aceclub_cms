"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenBtn from "../GreenBtn";
import { strapiImage } from "../../../../../lib/strapi/strapiImage";

const Navbar = ({ logo }: { logo: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "How to Play",
      link: "",
      submenu: [
        { title: "Poker Basics", link: "/poker-basics" },
        { title: "Table Positions", link: "/table-positions" },
        { title: "Game Types", link: "/game-types" },
        { title: "Strategy & Tips", link: "/strategy-tips" },
      ],
    },
    {
      title: "Cash Games",
      link: "",
      submenu: [
        { title: "NLH", link: "/nlh" },
        { title: "PLO4", link: "/plo4" },
        { title: "PLO5", link: "/plo5" },
        { title: "PLO6", link: "/plo6" },
      ],
    },
    { title: "Tournaments", link: "/tournaments" },
    { title: "Promotions", link: "/promotions" },
    {
      title: "Cashier",
      link: "",
      submenu: [
        { title: "Real Money Poker", link: "/real-money" },
        { title: "How to Deposit", link: "/how-to-deposit" },
        { title: "How to Withdraw", link: "/how-to-withdraw" },
        { title: "Bonus & Rewards", link: "/bonus-rewards" },
      ],
    },
    { title: "About Us", link: "/about-us" },
    { title: "Contact Us / Support", link: "/contact" },
  ];

  // ✅ Dynamic “Download Now” button from Strapi (fallback included)
  const navRHS = [
    {
      title: logo?.downloadButton?.title || "Download Now",
      link: logo?.downloadButton?.link || "/download",
      target: logo?.downloadButton?.target || "_self",
    },
  ];

  return (
    <>
      <header className="h-full w-full roboto-normal p-2 md:px-20 sticky top-0 z-40 bgHeader">
        <nav className="flex justify-between items-center w-full relative">
          {/* ✅ Dynamic Logo */}
          <div className="navbar-brand">
            <Link href="/" aria-label="Home">
              <Image
                width={150}
                height={60}
                src={strapiImage(logo?.url)}
                alt={logo?.alternativeText || "Sniper Poker"}
                className="max-w-48 md:max-w-64 h-auto"
              />
            </Link>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <ul className="flex space-x-5 items-center">
              {navItems.map((item, ind) => (
                <li
                  key={ind}
                  className="relative group"
                  aria-haspopup={!!item.submenu}
                >
                  <Link
                    href={item.link || "#"}
                    className="roboto-normal cursor-pointer"
                    aria-expanded="false"
                    onClick={
                      item.submenu
                        ? (e) => e.preventDefault() // Prevent click if submenu exists
                        : undefined
                    }
                  >
                    {item.title}
                  </Link>

                  {/* ✅ Hover-friendly Submenu */}
                  {item.submenu && (
                    <ul
                      className="
                        absolute left-0 top-full mt-2 p-3 rounded-lg shadow-lg 
                        min-w-[220px] bgTheme space-y-2 opacity-0 
                        group-hover:opacity-100 pointer-events-none 
                        group-hover:pointer-events-auto transition-all 
                        duration-200 ease-in-out z-30 submenu
                      "
                    >
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.link}
                            className="block hover:text-green-400 whitespace-nowrap"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* ✅ Right Button */}
            <ul className="flex gap-x-2">
              {navRHS.map((btn, i) => (
                <li key={i}>
                  <GreenBtn
                    title={btn.title}
                    url={btn.link}
                    target={btn.target}
                    rel={
                      btn.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
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
          <div className="md:hidden mt-1 space-y-2 bgTheme absolute w-full px-5 py-8 left-0 top-[120px] z-40">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, ind) => (
                <li key={ind}>
                  <Link href={item.link || "#"} className="block roboto-normal">
                    {item.title}
                  </Link>

                  {item.submenu && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.link}
                            className="block text-sm text-gray-300"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
            url={navRHS[0].link}
            target={navRHS[0].target}
            rel={
              navRHS[0].target === "_blank" ? "noopener noreferrer" : undefined
            }
          />
        </div>
      )}
    </>
  );
};

export default Navbar;