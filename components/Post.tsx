/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { postprop } from "../types/interface";
import Link from "next/link";

export default function Post({ post }: postprop) {
  return (
    <div className="card  drop-shadow-lg flex flex-col align-middle">
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
      <div className="date-align text-center">
        <div className="post-date flex flex-row text-sm opacity-60">
          {post.frontmatter.tag}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
            <circle
              r="60"
              cy="97"
              cx="497"
              // eslint-disable-next-line react/no-unknown-property
              stroke-width="2"
              stroke="#E4AF4C"
              fill="black"
            />
          </svg>
          {post.frontmatter.date}
        </div>
      </div>
      <h3 className="font-semibold text-2xl">{post.frontmatter.title}</h3>
      <p className="text-sm align-middle opacity-60">
        {post.frontmatter.excerpt}
      </p>
      <div className="read-align">
        <Link href={`/blog/${post.slug}`}>
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
        </Link>
      </div>
    </div>
  );
}
