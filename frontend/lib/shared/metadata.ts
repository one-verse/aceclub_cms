import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "Calling Station", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "Calling Station", // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "Calling Station",
      description: seo?.ogDescription || seo?.metaDescription || "Calling Station",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || "Calling Station",
      title: seo?.twitterTitle || seo?.metaTitle || "Calling Station",
      description:
        seo?.twitterDescription || seo?.metaDescription || "Calling Station",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
