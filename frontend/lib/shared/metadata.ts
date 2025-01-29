import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "One Trade Live", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "One Trade Live", // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "One Trade Live",
      description: seo?.ogDescription || seo?.metaDescription || "Trade Live",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || "One Trade Live",
      title: seo?.twitterTitle || seo?.metaTitle || "One Trade Live",
      description:
        seo?.twitterDescription || seo?.metaDescription || "Trade Live",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
