import Image from "next/image";
import GreenBtn from "../GreenBtn";
import { strapiImage } from "../../../../../lib/strapi/strapiImage";
import Link from "next/link";
import { Key } from "react";

interface NavItem {
  length: number;
  map(
    arg0: (item: {
      id: Key | null | undefined;
      title: string;
      link: string;
      target: string;
    }) => import("react").JSX.Element
  ): import("react").ReactNode;
  id?: number;
  title: string;
  link: string;
  target: string;
}

const Navbar = ({
  logo,
  items,
  navRHS,
}: {
  logo: any;
  items: NavItem[];
  navRHS: NavItem;
}) => {
  return (
    <header className="h-full w-full roboto-normal p-2 md:px-20 sticky top-0 z-40 bgHeader">
      <nav className="flex w-full items-center space-x-2">
        <div className="navbar-brand mx-auto md:ms-0 md:me-auto">
          <Link href="https://exchange.onetrade.live">
            <Image
              width={251}
              height={60}
              src={strapiImage(logo.url)}
              alt="OneTrade Logo"
              className="max-w-48 md:max-w-64 h-auto"
            />
          </Link>
        </div>
        {items && (
          <div className="nav-list h-full hidden md:block">
            <ul className="flex space-x-5 content-center items-center h-full">
              {items.map((el: NavItem, ind: number) => (
                <li key={ind}>
                  <Link
                    className="roboto-normal"
                    target={el.target}
                    href={el.link}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="nav-trait hidden md:block">
          {/* <p className="text-lg font-bold">18+ only</p> */}
        </div>
        {navRHS && navRHS.length > 0 && (
          <div className="nav-cta hidden md:block">
            <ul className="flex gap-x-2">
              {navRHS.map(
                (item: {
                  id: Key | null | undefined;
                  title: string;
                  link: string;
                  target: string;
                }) => (
                  <li key={item.id}>
                    <GreenBtn
                      title={item.title}
                      url={item.link}
                      target={item.target}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* {navRHS && (
          <div className="nav-cta hidden md:block">
            <ul>
              <li>
                <GreenBtn title={navRHS.title} url={navRHS.link} />
              </li>
            </ul>
          </div>
        )} */}
      </nav>
    </header>
  );
};
export default Navbar;
