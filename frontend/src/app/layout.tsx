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
        />
        <main className="">{children}</main>
        <Footer FooterData={pageData.footer} />
        {/* <Script src="https://launchers.bonb.io/support.js?id=BQPIA5MFLr" defer></Script> */}
        <Script id="tawkto-chat" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6912e919f6ff90195b6c914f/1j9ott3kh';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();`}}
          />
      </body>
    </html>
  );
}
