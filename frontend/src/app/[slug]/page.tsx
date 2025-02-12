import fetchContentType from "../../../lib/strapi/fetchContentType";
import DynamicZoneManager from "../components/dynamic-zone/manager";

export default async function Page({ params }: { params: { slug: string } }) {
  const pageData = await fetchContentType(
    "pages",
    `filters[slug][$eq]=${params.slug}`,
    true
  );
  console.log(pageData);

  if (!pageData) {
    return (
      <>
        <div className="flex min-h-80 flex-col items-center justify-center">
          <div className="h-full">
            <p className="teko text-center text-6xl">404</p>
            <p className="teko text-center text-xl">Oops ! page not found</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="min-h-screen bg-white">
    <div className="container mx-auto max-w-[1200px] px-4">
      <p className="h1 font-sans text-light my-5 text-center text-white text-5xl">
        {pageData.title}
      </p>
      <div className="my-3" >
        {pageData.DynamicZone && (
          <DynamicZoneManager dynamicZone={pageData.DynamicZone} />
        )}
      </div>
    </div>
    </div>
  );
}
