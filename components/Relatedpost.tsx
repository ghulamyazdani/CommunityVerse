/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Related } from "../types/interface";
export default function Relatedpost({ posts, slug, tag }: Related) {
  function check(incomingPost: any) {
    const slugTagSplit = tag.toLowerCase().split(",");
    const incomingTagSplit = incomingPost.frontmatter.tag
      .toLowerCase()
      .split(",");
    const intersection = slugTagSplit.filter((element) =>
      incomingTagSplit.includes(element)
    );
    if (intersection.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="border-2 p-4 mt-3 rounded">
      <h3 className="text-2xl mb-3 text-center font-bold">Related post</h3>
      {posts.map((post: any, index: number) => {
        if (post.slug !== slug && check(post)) {
          return (
            <Link href={`/blog/${post.slug}`} passHref key={index}>
              <a
                key={index}
                className="flex ml-7 content-center gap-4 items-center flex-row cursor-pointer hover:bg-slate-200 rounded-md"
              >
                <img
                  className="w-20 h-20 bg-cover border-2 object-cover rounded-full m-2"
                  src={post.frontmatter.cover_image}
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <span className="text-sm opacity-60">
                    {post.frontmatter.date}
                  </span>
                  <a className="">{post.frontmatter.title}</a>
                </div>
              </a>
            </Link>
          );
        }
      })}
    </div>
  );
}
