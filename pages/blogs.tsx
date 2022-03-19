/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MainPosts from '../components/MainPosts'
import { postInt } from '../types/interface'
import { sortByDate } from '../utils'
import Header from '../components/Header'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import dynamic from 'next/dynamic'
const Rocketanim = dynamic(() => import('../components/Icons/Rocketanim'), {
    ssr: false,
})
// import ToTop from '../components/use/ToTop'

const Home: NextPage<any> = ({ posts }) => {
    return (
        <div className="dark:bg-[#0E1A38] transition-transform">
            <Header posts={posts} />
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="w-1/2 flex flex-col mt-5">
                    <header className="flex flex-row gap-3 items-center">
                        <img
                            src="https://picsum.photos/30/30"
                            className="rounded-full"
                        />
                        <div> Stephan Tromer </div>
                        <div className="text-sm text-gray-500"> Jan 13 </div>
                    </header>

                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3 flex flex-col">
                            <div className="font-bold text-lg pt-3">
                                Go (Golang) with Structs and Interfaces
                            </div>

                            <div className="font-light text-sm pt-2">
                                Although it would be possible for us to write
                                programs only using Go’s built-in data types, at
                                some point, it would become quite tedious.
                                Consider a program that....
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img src="https://picsum.photos/100/100" />
                        </div>
                    </div>

                    <footer className="flex flex-row pt-7 gap-3 items-center">
                        <button className="hover:bg-gray-300 delay-100 duration-100 bg-gray-200 rounded-full py-1 px-2 text-xs">
                            Tutorial
                        </button>

                        <div className="text-gray-500 text-xs">7 min read</div>

                        <div className="text-gray-500 text-xs">
                            Based on your reading history
                        </div>
                    </footer>

                    <hr className="mt-5" />
                </div>

                <div className="w-1/2 flex flex-col mt-5">
                    <header className="flex flex-row gap-3 items-center">
                        <img
                            src="https://picsum.photos/30/30"
                            className="rounded-full"
                        />
                        <div> Stephan Tromer </div>
                        <div className="text-sm text-gray-500"> Jan 13 </div>
                    </header>

                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3 flex flex-col">
                            <div className="font-bold text-lg pt-3">
                                Go (Golang) with Structs and Interfaces
                            </div>

                            <div className="font-light text-sm pt-2">
                                Although it would be possible for us to write
                                programs only using Go’s built-in data types, at
                                some point, it would become quite tedious.
                                Consider a program that....
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img src="https://picsum.photos/100/100" />
                        </div>
                    </div>

                    <footer className="flex flex-row pt-7 gap-3 items-center">
                        <button className="hover:bg-gray-300 delay-100 duration-100 bg-gray-200 rounded-full py-1 px-2 text-xs">
                            Tutorial
                        </button>

                        <div className="text-gray-500 text-xs">7 min read</div>

                        <div className="text-gray-500 text-xs">
                            Based on your reading history
                        </div>
                    </footer>

                    <hr className="mt-5" />
                </div>

                <div className="w-1/2 flex flex-col mt-5">
                    <header className="flex flex-row gap-3 items-center">
                        <img
                            src="https://picsum.photos/30/30"
                            className="rounded-full"
                        />
                        <div> Stephan Tromer </div>
                        <div className="text-sm text-gray-500"> Jan 13 </div>
                    </header>

                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3 flex flex-col">
                            <div className="font-bold text-lg pt-3">
                                Go (Golang) with Structs and Interfaces
                            </div>

                            <div className="font-light text-sm pt-2">
                                Although it would be possible for us to write
                                programs only using Go’s built-in data types, at
                                some point, it would become quite tedious.
                                Consider a program that....
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img src="https://picsum.photos/100/100" />
                        </div>
                    </div>

                    <footer className="flex flex-row pt-7 gap-3 items-center">
                        <button className="hover:bg-gray-300 delay-100 duration-100 bg-gray-200 rounded-full py-1 px-2 text-xs">
                            Tutorial
                        </button>

                        <div className="text-gray-500 text-xs">7 min read</div>

                        <div className="text-gray-500 text-xs">
                            Based on your reading history
                        </div>
                    </footer>

                    <hr className="mt-5" />
                </div>
            </div>
        </div>
    )
}

export default Home

export async function getStaticProps() {
    // Get all the files in posts dir
    const files = fs.readdirSync(path.join('posts'))
    // Get the content of each file
    const posts = files.map(filename => {
        const slug = filename.replace('.mdx', '')
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8',
        )
        const { data: frontmatter } = matter(markdownWithMeta)
        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}
