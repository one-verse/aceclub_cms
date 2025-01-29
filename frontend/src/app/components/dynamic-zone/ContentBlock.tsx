"use client";

export const ContentBlock = ({ content }: { content: any }) => {
  if (!content) return null;
  return (
    <div
      className="mx-auto w-full"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
