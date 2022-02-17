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
import Header from '../components/Header'
import Link from 'next/link'

const Home: NextPage<any> = ({ posts }) => {
    return (
        <div className="dark:bg-[#061621]">
            <Head>
                <title>CommunityBlog</title>
            </Head>
            <Header posts={posts} />
            <div className="text-center pt-28 header ">
                <h1 className="text-3xl font-extrabold">
                    Welcome to Community Blog
                </h1>
                <p className="text-lg opacity-70">
                    Get the latest and best of all Community blogs here
                </p>
                <p className="text-s opacity-50">
                    Want to contribute and publish some blogs?
                    <div className="border-none decoration-slice underline text-blue-400">
                        <Link href="https://github.com/ghulamyazdani/markedblogs/new/main/posts">
                            <a
                                className="text-blue-700 hover:text-blue-900"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Contribute
                            </a>
                        </Link>
                    </div>
                </p>
            </div>

            <div className="posts p-4">
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
