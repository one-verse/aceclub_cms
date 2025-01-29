import Link from "next/link";

export default function Footer({ FooterNavItems }: { FooterNavItems: any }) {
  return (
    <footer className="bg-black p-8 text-white">
      <div className="mx-auto max-w-5xl text-center">
        {/* Logo and Tagline */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/logo.png" // Replace with your logo path
                  alt="OneTrade Logo"
                  className="h-22 w-22"
                />
              </Link>
            </div>
          </div>
          <p className="text-gray-400">Trade Live, Think ahead</p>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-start space-y-3 text-sm text-gray-400 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          {FooterNavItems.map(
            (
              ele: { link: string; target: string; title: string },
              ind: number
            ) => (
              <Link
                className="text-muted inter-normal"
                key={ind}
                href={ele.link}
                target={ele.target}
              >
                {ele.title}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
