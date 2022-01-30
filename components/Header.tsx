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
            <div className="results absolute border-2 mt-1 z-10 bg-white rounded-md">
              {posts.map((post: any, index: number) => {
                if (
                  post.frontmatter.title
                    .toLowerCase()
                    .includes(value.toLowerCase())
                ) {
                  return (
                    <Link href={`/blog/` + post.slug} passHref>
                      <div
                        key={index}
                        className="relative p-4 text-gray-50 cursor-pointer border-b-2 hover:bg-slate-200 "
                      >
                        <option
                          value=""
                          className="relative text-justify  truncate text-black "
                        >
                          {post.frontmatter.title}
                        </option>
                      </div>
                    </Link>
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
