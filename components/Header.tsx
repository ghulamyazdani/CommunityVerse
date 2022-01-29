import Link from "next/link";
import { useState, useEffect } from "react";
import fs from "fs";
import path from "path";

export default function Header() {
  const [value, setValue] = useState("");
  console.log(value);
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
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="absolute">
              <option value="">heloo</option>
              <option value="">heloo</option>
              <option value="">heloo</option>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
export async function getStaticProps() {
  // Get all the files in posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get the
}
