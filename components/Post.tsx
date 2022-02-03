/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { postprop } from "../types/interface";
import Link from "next/link";

export default function Post({ post }: postprop) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card dark: flex flex-col align-middle cursor-pointer hover:drop-shadow-3xl  ">
        <div>
          <img
            src={post.frontmatter.cover_image}
            alt={post.frontmatter.title}
          />
        </div>
        <div className="date-align text-center">
          <div className="post-date dark:text-black flex flex-row text-sm opacity-60">
            <div>{post.frontmatter.tag}</div>
            <div className=" point width-sm bg-black height-sm"></div>
            <div>{post.frontmatter.date}</div>
          </div>
        </div>
        <h3 className="font-semibold dark:text-black text-xl mt-2">
          {post.frontmatter.title}
        </h3>
        <p className="text-sm dark:text-black align-middle opacity-60 mt-2">
          {post.frontmatter.excerpt}
        </p>
        <div className="read-align dark:text-black ">
          <div className="read-b  tn flex flex-row gap-2 cursor-pointer">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
