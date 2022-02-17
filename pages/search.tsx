import type { NextPage } from 'next'
import { useState } from 'react'
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
    const [value, setValue] = useState('something')
    return (
        <div>
            <Header posts={posts} />
            <div className="search">
                <form action="">
                    <input
                        type="text"
                        placeholder="Search blogs"
                        className="text-black rounded-lg w-full p-2 focus:outline-none focus:shadow-outline"
                        onChange={e => {
                            e.target.value
                                ? setValue(e.target.value)
                                : setValue('something')
                        }}
                    />
                    <div className="results overflow-hidden mt-1 z-10 bg-white rounded-lg">
                        {posts.map((post: any, index: number) => {
                            if (
                                post.frontmatter.title
                                    .toLowerCase()
                                    .includes(value.toLowerCase())
                            ) {
                                return (
                                    <Link href={`/blog/` + post.slug} passHref>
                                        <div
                                            key={index}
                                            className="relative p-4 border-2 text-gray-50 cursor-pointer hover:bg-slate-200 "
                                        >
                                            <option
                                                value=""
                                                className="relative text-justify  truncate text-black "
                                            >
                                                {post.frontmatter.title}
                                            </option>
                                        </div>
                                    </Link>
                                )
                            } else if (
                                post.frontmatter.author
                                    .toLowerCase()
                                    .includes(value.toLowerCase())
                            ) {
                                return (
                                    <div className="text-black">
                                        {post.frontmatter.author}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </form>
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
        const slug = filename.replace('.md', '')
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
