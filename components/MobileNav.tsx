import Link from 'next/link'
import React, { useState } from 'react'
import Darkmode from './Darkmode'
import Search from './Search'
import { BiSearchAlt } from 'react-icons/bi'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import Logo from './Icons/Logo'

export default function MobileNav({ posts, nav }: any) {
    const [Active, setActive] = useState(false)
    const handleSearch = () => {
        setActive(!Active)
    }
    return (
        <div
            className={`mob-nav ${
                nav ? 'absolute' : 'hidden'
            } lg:hidden md:hidden left-[10%] align-center text-center bg-black z-10 w-[80%] flex flex-col gap-5 justify-center items-center top-20`}
        >
            <ul className="dark:text-white flex flex-col gap-10  text-black ">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/#mentors"> Mentors</Link>
                </li>
                <li>
                    <Link href="/blogs">Articles</Link>
                </li>
                <li>
                    <Link href="/#articles">Top Blogs</Link>
                </li>
            </ul>
            <div className=" lg:flex relative flex gap-5 flex-row justify-around text-black items-center dark:text-white">
                {/* <Search posts={posts} /> */}
                <BiSearchAlt
                    className="h-7 w-7 cursor-pointer"
                    onClick={() => {
                        handleSearch()
                    }}
                />
                <a
                    href="https://discord.gg/z2RGmtV2"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaDiscord className="h-6 w-6  cursor-pointer" />
                </a>
                <a
                    href="https://github.com/ghulamyazdani/CommunityBlog"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaGithub className="h-6 w-6" />
                </a>
                <Darkmode />
            </div>
            <Search className="top-40" active={Active} posts={posts} />
        </div>
    )
}
