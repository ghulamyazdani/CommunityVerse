import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { postInt } from '../types/interface'
import { sortByDate } from '../utils'
import Main from '../components/Main'
import Header from '../components/Header'

const Home: NextPage<any> = ({ posts }) => {
    return (
        <div className="dark:bg-[#0E1A38]">
            <Head>
                <title>CommunityBlog</title>
            </Head>
            <Header posts={posts} />
            <Main />
            <div className="posts pb-10 p-4">
                {posts.map((post: postInt, index: number) => {
                    return <Post key={index} post={post} />
                })}
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
