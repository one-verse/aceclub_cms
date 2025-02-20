import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="OneTrade Logo"
            className="h-20 w-20"
          />
          <span className="text-lg font-bold">OneTrade</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#ExploreSection" className="hover:text-gray-400">
            Categories
          </Link>
          <Link href="#OneTradeWorks" className="hover:text-gray-400">
            How it works
          </Link>
          <Link href="#QA" className="hover:text-gray-400">
            FAQs
          </Link>
          <Link href="#18-plus" className="hover:text-gray-400">
            18+ only
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="/trade-live"
            className="bg-green-500 text-black px-4 py-2 font-bold rounded-lg hover:bg-green-600"
          >
            Trade Live!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
