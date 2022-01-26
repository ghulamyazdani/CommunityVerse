/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { postprop } from "../types/interface";
import Link from "next/link";

export default function Post({ post }: postprop) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
      <div className="post-date">Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <div className="btn">Read More</div>
      </Link>
    </div>
  );
}
