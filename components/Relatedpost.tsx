/* eslint-disable @next/next/no-img-element */
import React from "react";
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
    console.log(slugTagSplit, incomingTagSplit, intersection);
    if (intersection.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="border-2 p-4 mt-3 text-center rounded">
      <h3 className="text-2xl mb-3 font-bold">Related post</h3>
      {posts.map((post: any, index: number) => {
        if (post.slug !== slug && check(post)) {
          return (
            <div key={index} className="flex flex-row">
              <img
                className="w-20 h-20 bg-cover object-cover rounded-full m-2"
                src={post.frontmatter.cover_image}
                alt=""
              />
              <a className="text-blue-500 hover:text-blue-700">
                {post.frontmatter.title}
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}
