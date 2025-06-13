import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "ACE CLUB POKER", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "ACE CLUB POKER", // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "ACE CLUB POKER",
      description: seo?.ogDescription || seo?.metaDescription || "ACE CLUB POKER",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || "ACE CLUB POKER",
      title: seo?.twitterTitle || seo?.metaTitle || "ACE CLUB POKER",
      description:
        seo?.twitterDescription || seo?.metaDescription || "ACE CLUB POKER",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
