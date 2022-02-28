import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MainPosts from '../components/MainPosts'
import { postInt } from '../types/interface'
import { sortByDate } from '../utils'
import Main from '../components/Main'
import Header from '../components/Header'
import Techs from '../components/Techs'
import Mentors from '../components/Mentors'
import Testimonials from '../components/Testimonials'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

// import ToTop from '../components/use/ToTop'

const Home: NextPage<any> = ({ posts }) => {
    return (
        <div className="dark:bg-[#0E1A38] transition-transform">
            <Head>
                <title>Communityverse</title>
            </Head>
            <Header posts={posts} />
            <Main />
            <Techs />
            <Mentors />

            <div
                id="articles"
                className="px-0 backdrop-opacity-10 dark:backdrop-opacity-70 backdrop-invert dark:bg-[#000000] bg-white/30 lg:px-20"
            >
                <h1 className="text-center text-4xl pt-4">Read and Learn</h1>
                <div className="posts pb-10 p-4">
                    {posts.map((post: postInt, index: number) => {
                        if (index <= 3) {
                            return <MainPosts key={index} post={post} />
                        }
                    })}
                </div>
                <div className="post link--arrowed items-end cursor-pointer text-center text-md  flex flex-row justify-center  gap-3">
                    View All Articles
                    <HiOutlineArrowNarrowRight className="arrow-icon w-6 h-6" />
                </div>
            </div>
            <Testimonials />
            {/* <ToTop /> */}
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
