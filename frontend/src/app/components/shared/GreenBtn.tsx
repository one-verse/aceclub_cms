// import Link from "next/link";
// export default function GreenBtn({
//   title,
//   url,
//   target,
// }: {
//   title: string;
//   url: string;
//   target:string;
//   rel:string;
// }): React.ReactElement {
//   return (
//     <>
//       <Link
//         className="block md:inline-block btn primary-green text-black font-medium text-sm px-5 py-2.5  text-center"
//         href={url}
//         target={target}
//         rel="noopener noreferrer"
//       >
//         {title}
//       </Link>
//     </>
//   );
// }


"use client";
import React from "react";
import Link from "next/link";

type GreenBtnProps = {
  title: string;
  url?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function GreenBtn({
  title,
  url = "#",
  target,
  rel,
  onClick,
}: GreenBtnProps) {
  return (
    <Link
      href={url}
      target={target}
      rel={rel}
      onClick={(e) => {
        if (onClick) onClick(e); // ✅ trigger the click event
      }}
      className="block md:inline-block btn primary-green text-black font-medium text-sm px-5 py-2.5  text-center"
    >
      {title}
    </Link>
  );
}
