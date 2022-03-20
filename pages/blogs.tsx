/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
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
            <Header posts={posts} pos={true} />
            <h1 className=" pt-32 pb-10 text-2xl font-bold text-center md:text-4xl">
                Articles
            </h1>
            <div className="grid gap-8 pb-10 py-3 justify-center grid-cols-none md:grid-cols-1 md:max-w-sm  lg:grid-cols-2 md:gap-16 lg:max-w-4xl mx-auto">
                {posts.map((post: postInt, index: number) => {
                    return <Post key={index} post={post} />
                })}
            </div>
            <Rocketanim />
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
