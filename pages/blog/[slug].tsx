/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { slugProps } from "../../types/interface";

export default function Postpage({
  frontmatter: { title, date, cover_image },
  content,
  slug,
}: slugProps) {
  return (
    <>
      <Link href="/">
        <div className="btn btn-back">Go Back</div>
      </Link>

      <div className="card-page">
        <h1 className="post-title text-3xl align-middle ">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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
  const markDownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content }: any = matter(markDownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
