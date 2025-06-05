"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { format } from "date-fns";
import Link from "next/link";

export const BlogSection = (props: any) => {
  return (
    <div className="container mx-auto max-w-[1200px] px-2 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-light-gray mb-12 text-center text-2xl md:text-5xl">
          Knowledge and Trends
        </p>
        <div className="grid grid-cols-2 md:gap-8">
          {props.blogs.map((blog: any, index: number) => (
            <Link key={index} href={`/blogs/${blog.slug}`}>
              <div className="!important transform rounded-lg border border-transparent p-2 shadow-md transition-transform hover:border-teal-500 hover:bg-neutral-900">
                {blog.banner && (
                  <div className="h-auto">
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      width={1000}
                      height={100}
                      src={strapiImage(blog.banner.url)}
                      alt={blog.banner.alternativeText || ""}
                    />
                  </div>
                )}
                <div className="md:p-6">
                  <div className="my-2 flex items-center justify-between text-xs text-gray-400">
                    {blog.minsToRead && (
                      <span>{blog.minsToRead} mins read</span>
                    )}
                    <span>
                      {blog.createdAt ? format(blog.createdAt, "do MMM y") : ""}
                    </span>
                  </div>
                  <h3 className="roboto-normal text-light-gray mb-3 text-4xl text-sm">
                    {blog.title}
                  </h3>
                  <p className="text-muted text-xs">{blog.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
