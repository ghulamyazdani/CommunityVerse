import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { slugProps } from "../../types/interface";

export default function Postpage({ frontmatter, content, slug }: slugProps) {
  console.log(frontmatter, content, slug);
  return <div>{content}</div>;
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
