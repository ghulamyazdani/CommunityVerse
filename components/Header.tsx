import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header({ posts }: any) {
  const [value, setValue] = useState("something");

  return (
    <header>
      <div className="flex flex-auto justify-around items-center">
        <Link href="/" passHref>
          <h2 className="cursor-pointer text-3xl">Community Blog</h2>
        </Link>
        <div className="search">
          <form action="">
            <input
              type="text"
              placeholder="Search blogs"
              className="text-black rounded-lg w-full p-2 focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                e.target.value
                  ? setValue(e.target.value)
                  : setValue("something");
              }}
            />
            <div className="absolute">
              {posts.map((post: any) => {
                if (
                  post.frontmatter.title
                    .toLowerCase()
                    .includes(value.toLowerCase())
                ) {
                  return (
                    <a href={`/blog/` + post.slug}>
                      <option value="" className="text-black">
                        {post.frontmatter.title}
                      </option>
                    </a>
                  );
                }
              })}
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
