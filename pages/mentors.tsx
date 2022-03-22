import type { NextPage } from 'next'
import { useState } from 'react'

import '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { postInt } from '../types/interface'
import { sortByDate } from '../utils'
import Header from '../components/Header'
import Link from 'next/link'
import Mentors from '../components/Mentors'
const Home: NextPage<any> = ({ posts }) => {
    const [value, setValue] = useState('something')
    return (
        <div>
            <Header posts={posts} pos={true} />
            <Mentors />
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
