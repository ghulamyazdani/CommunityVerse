/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
export default function Header({ posts }: any) {
  const [value, setValue] = useState("something");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="fixed w-full z-10">
      <div className="flex flex-auto m-3 justify-around items-center">
        <Link href="/" passHref>
          <h2 className="cursor-pointer font-Port flex flex-row  text-3xl">
            <img className="w-56" src="/images/logo.svg"></img>
          </h2>
        </Link>
        <div className="search flex flex-row justify-between items-center">
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
            <div className="results absolute overflow-hidden mt-1 z-10 bg-white rounded-lg">
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
                        className="relative p-4 border-2 text-gray-50 cursor-pointer hover:bg-slate-200 "
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
          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
}
