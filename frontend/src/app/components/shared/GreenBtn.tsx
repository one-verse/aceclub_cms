import Link from "next/link";
export default function GreenBtn({
  title,
  url,
}: {
  title: string;
  url: string;
  target:string;
  rel:string;
}): React.ReactElement {
  return (
    <>
      <Link
        className="block md:inline-block btn primary-green text-black poppins-medium p-4 px-6 text-lg text-center"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </>
  );
}
