import ContactForm from "../app/components/ContactForm";
import PageContent from "../../lib/shared/PageContent";
import fetchContentType from "../../lib/strapi/fetchContentType";

export default async function Page() {
  const pageData = await fetchContentType(
    "pages",
    `filters[slug][$eq]=homepage`,
    true
  );

  return (
    <div>
      <PageContent pageData={pageData} />
      <ContactForm />
    </div>
  );
}
