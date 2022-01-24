import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.scss";
interface Props {
  posts: string;
}
const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      posts: "ho rha hai",
    },
  };
}
