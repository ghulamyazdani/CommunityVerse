/* eslint-disable @next/next/no-img-element */
import React from "react";
import { postprop } from "../types/interface";

export default function Post({ post }: postprop) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
    </div>
  );
}
