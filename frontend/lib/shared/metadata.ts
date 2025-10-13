import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "Ace Club Poker", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "Ace Club Poker", // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "Ace Club Poker",
      description: seo?.ogDescription || seo?.metaDescription || "Ace Club Poker",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || "Ace Club Poker",
      title: seo?.twitterTitle || seo?.metaTitle || "Ace Club Poker",
      description:
        seo?.twitterDescription || seo?.metaDescription || "Ace Club Poker",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
