/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { slugProps } from "../../types/interface";
import Share from "../../components/Share";
import Author from "../../components/Author";
import Header from "../../components/Header";
import Likepost from "../../components/Likepost";
export default function Postpage({
  posts,
  frontmatter: { title, date, cover_image },
  content,
  slug,
  resData,
}: slugProps) {
  return (
    <>
      <Header posts={posts} />
      <div className="card-page">
        <Share slug={slug} />
        <div className="content-card border-2">
          <img src={cover_image} alt="" />
          <div className="m-2">
            <h1 className="post-title text-4xl align-middle text-center font-bold">
              {title}
            </h1>

            <div className="post-date text-center">Posted on {date}</div>
            <div className="post-body">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
        <div>
          <Author Data={resData} />
          <Likepost />
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }: any) {
  // Get all the files in posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get the content of each file for searching
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  const markDownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content }: any = matter(markDownWithMeta);

  const res = await fetch("https://api.github.com/users/" + frontmatter.author);
  const resData = await res.json();

  return {
    props: {
      posts,
      frontmatter,
      content,
      slug,
      resData,
    },
  };
}
