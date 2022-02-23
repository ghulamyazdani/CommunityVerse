/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import Darkmode from './Darkmode'
import Search from './Search'
import { BiSearchAlt } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'

import IconSearch from './Icons/Search'

export default function Header({ posts }: any) {
    return (
        <header className="fixed w-full z-10">
            <nav className="flex flex-auto m-3 justify-around items-center">
                <Link href="/" passHref>
                    <h2 className="cursor-pointer font-Port flex flex-row  text-3xl">
                        <img className="w-56" src="/images/logo.svg"></img>
                    </h2>
                </Link>
                <ul className="dark:text-black hidden lg:flex flex-row gap-8">
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Top Blogs</li>
                    <li>About</li>
                </ul>
                <div className="search flex gap-5 flex-row justify-between items-center dark:text-black">
                    {/* <Search posts={posts} /> */}
                    <BiSearchAlt className="h-7 w-7" />
                    <FaGithub className="h-6 w-6" />
                    <Darkmode />
                </div>
            </nav>
        </header>
    )
}
