/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import Darkmode from './Darkmode'
import Search from './Search'
import { BiSearchAlt } from 'react-icons/bi'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import Logo from './Icons/Logo'

export default function Header({ posts, pos }: any) {
    const [Active, setActive] = useState(false)
    const handleSearch = () => {
        setActive(!Active)
    }
    return (
        <>
            <header
                className={
                    pos
                        ? 'w-full z-10 fixed  dark:backdrop-opacity-70 backdrop-invert  dark:bg-[#000000] bg-[#F7F7F7] shadow-md'
                        : ' w-full z-10'
                }
            >
                <nav className="flex flex-auto m-3 mx-5 lg:mx-0 justify-between lg:justify-around items-center opacity-80">
                    <Link href="/" passHref>
                        <h2 className="cursor-pointer w-48 mt-[-0.5rem] font-Port flex flex-row text-3xl">
                            <Logo />
                        </h2>
                    </Link>
                    <ul className="dark:text-white hidden  text-black lg:flex flex-row gap-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/#articles">Mentors</Link>
                        </li>
                        <li>Articles</li>
                        <li>Top Blogs</li>
                    </ul>
                    <div className="search lg:flex hidden  md:flex gap-5 flex-row justify-between text-black items-center dark:text-white">
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
                    <HiMenuAlt3 className="h-6 w-6 relative md:hidden lg:hidden " />
                </nav>
            </header>
            <Search active={Active} posts={posts} />
        </>
    )
}
