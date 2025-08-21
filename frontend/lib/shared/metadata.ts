import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "Sniper Poker", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "Sniper Poker", // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "Sniper Poker",
      description: seo?.ogDescription || seo?.metaDescription || "Sniper Poker",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || "Sniper Poker",
      title: seo?.twitterTitle || seo?.metaTitle || "Sniper Poker",
      description:
        seo?.twitterDescription || seo?.metaDescription || "Sniper Poker",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
