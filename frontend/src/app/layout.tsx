import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar/Navbar";
import fetchContentType from "../../lib/strapi/fetchContentType";
import Footer from "./components/Footer";
import { generateMetadataObject } from "../../lib/shared/metadata";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const pageData = await fetchContentType(
    "global",
    `&populate=seo.metaImage`,
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = await fetchContentType("global", "", true);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          logo={pageData.Logo}
          navRHS={pageData.NavigationBar.NavRHS}
          items={pageData.NavigationBar.items}
          support={pageData.NavigationBar.support}
        />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src='https://connect.facebook.net/en_US/fbevents.js';
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script');

            fbq('init', '1331476121500963');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1331476121500963&ev=PageView&noscript=1"
          />
        </noscript>

        <main className="">{children}</main>

        <Footer FooterData={pageData.footer} />

        <Script
          src="https://launchers.bonb.io/support.js?id=PzJlM3EkiS"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
