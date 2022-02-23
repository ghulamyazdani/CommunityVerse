/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import Darkmode from './Darkmode'
import Search from './Search'
import { BiSearchAlt } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import Logo from './Icons/Logo'
import IconSearch from './Icons/Search'

export default function Header({ posts }: any) {
    return (
        <header className=" w-full z-10">
            <nav className="flex flex-auto m-3 justify-around items-center">
                <Link href="/" passHref>
                    <h2 className="cursor-pointer w-48 mt-[-0.5rem] font-Port flex flex-row  text-3xl">
                        <Logo />
                    </h2>
                </Link>
                <ul className="dark:text-white hidden  text-black lg:flex flex-row gap-8">
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Top Blogs</li>
                    <li>About</li>
                </ul>
                <div className="search flex gap-5 flex-row justify-between text-black items-center dark:text-white">
                    {/* <Search posts={posts} /> */}
                    <BiSearchAlt className="h-7 w-7" />
                    <FaGithub className="h-6 w-6" />
                    <Darkmode />
                </div>
            </nav>
        </header>
    )
}
