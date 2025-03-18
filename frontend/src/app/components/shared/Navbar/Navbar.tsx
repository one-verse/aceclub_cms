import Image from "next/image";
import GreenBtn from "../GreenBtn";
import { strapiImage } from "../../../../../lib/strapi/strapiImage";
import Link from "next/link";

interface NavItem {
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
    <header className="h-full w-full poppins-normal p-2 md:px-20 sticky top-0 z-40">
      <nav className="flex w-full items-center space-x-4">
        <div className="navbar-brand mx-auto md:ms-0 md:me-auto">
          <Link href="https://exchange.onetrade.live">
            <Image
              width={260}
              height={60}
              src={strapiImage(logo.url)}
              alt="OneTrade Logo"
              className="max-w-48 md:max-w-64 h-auto"
            />
          </Link>
        </div>
        {items && (
          <div className="nav-list h-full hidden md:block">
            <ul className="flex space-x-5 content-center items-center h-full p-5">
              {items.map((el: NavItem, ind: number) => (
                <li key={ind}>
                  <Link
                    className="poppins-normal"
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
          <p className="text-lg font-bold">18+ only</p>
        </div>
        {navRHS && (
          <div className="nav-cta hidden md:block">
            <ul>
              <li>
                <GreenBtn title={navRHS.title} url={navRHS.link} />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
