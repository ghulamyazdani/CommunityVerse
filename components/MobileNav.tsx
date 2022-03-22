import Link from 'next/link'
import React, { useState } from 'react'
import Darkmode from './Darkmode'
import Search from './Search'
import { BiSearchAlt } from 'react-icons/bi'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function MobileNav({ posts, nav, setNav }: any) {
    const [Active, setActive] = useState(false)
    const config = {
        type: 'spring',
        damping: 20,
        stiffness: 100,
    }
    const handleSearch = () => {
        setActive(!Active)
    }
    return (
        <motion.div
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className={`mob-nav ${
                nav ? 'absolute' : 'hidden'
            } lg:hidden md:hidden left-[10%] align-center text-center bg-black z-10 w-[80%] flex flex-col gap-5 justify-center items-center top-20`}
        >
            <ul className="dark:text-white flex flex-col gap-10  text-black ">
                <li
                    onClick={() => {
                        setNav(!nav)
                    }}
                >
                    <Link href="/">Home</Link>
                </li>
                <li
                    onClick={() => {
                        setNav(!nav)
                    }}
                >
                    <Link href="/#mentors"> Mentors</Link>
                </li>
                <li
                    onClick={() => {
                        setNav(!nav)
                    }}
                >
                    <Link href="/blogs">Articles</Link>
                </li>
                <li
                    onClick={() => {
                        setNav(!nav)
                    }}
                >
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
        </motion.div>
    )
}
