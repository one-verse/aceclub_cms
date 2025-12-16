"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenBtn from "../GreenBtn";
import { strapiImage } from "../../../../../lib/strapi/strapiImage";
import { usePathname } from "next/navigation";
import ContactPageClient from "@/app/ContactPageClient";

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
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isActive = (link: string) => pathname === link;

  const handleNavClick = (
    e: React.MouseEvent<HTMLLIElement>,
    item: NavItem
  ) => {
    const anchor = (e.target as HTMLElement).closest("a");

    if (!anchor) return;

    // ✅ Strapi-driven condition
    if (item.title === "SCHEDULE DEMO") {
      e.preventDefault();
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <header className="h-full w-full roboto-normal p-3 md:px-20 sticky top-0 z-40 bgHeader">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              width={144}
              height={48}
              src={strapiImage(logo.url)}
              alt="BRUNO GAMING"
              className="max-w-48 md:max-w-64 h-auto"
            />
          </Link>

          {/* Desktop Menu */}
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
                <li key={item.id} onClick={(e) => handleNavClick(e, item)}>
                  <GreenBtn
                    title={item.title}
                    url={item.link}
                    target={item.target}
                    rel=""
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 w-full bgTheme px-5 py-8">
            <ul className="flex flex-col space-y-3">
              {items.map((el) => (
                <li key={el.id}>
                  <Link
                    href={el.link}
                    target={el.target}
                    onClick={() => setMenuOpen(false)}
                    className={`block ${
                      isActive(el.link) ? "active-link" : ""
                    }`}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {isModalVisible && (
        <ContactPageClient
          isModelShow={isModalVisible}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Navbar;
