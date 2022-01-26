import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { postInt } from "../types/interface";
import { sortByDate } from "../utils";

const Home: NextPage<any> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="posts">
        {posts.map((post: postInt, index: number) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // Get all the files in posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get the content of each file
  console.log(files);
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

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
