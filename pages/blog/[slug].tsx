/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugProps } from '../../types/interface'
import Share from '../../components/Share'
import Author from '../../components/Author'
import Header from '../../components/Header'
import Likepost from '../../components/Likepost'
import Relatedpost from '../../components/Relatedpost'
import GetComment from '../../components/GetComment'
export default function Postpage({
    posts,
    frontmatter: { title, date, cover_image, tag },
    content,
    slug,
    resData,
}: slugProps) {
    return (
        <div className=" dark:bg-[#0E1A38] transition-transform">
            <Header posts={posts} pos={true} />

            <div className="card-page ">
                <div className="share">
                    <Share slug={slug} />
                </div>
                <div className="content-card mt-20">
                    <div className="card-main border-2">
                        <img src={cover_image} alt="" />
                        <div className="m-2">
                            <h1 className="post-title text-4xl align-middle text-center font-bold">
                                {title}
                            </h1>
                            <div className="post-date text-center">
                                Posted on {date}
                            </div>
                            <div className="post-body">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(content),
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <GetComment slug={slug} />
                    <Relatedpost posts={posts} slug={slug} tag={tag} />
                </div>
                <div>
                    <div className="lg:sticky relative top-0 lg:top-24">
                        <Author Data={resData} />
                        <Likepost slug={slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params: { slug } }: any) {
    // Get all the files in posts dir
    const files = fs.readdirSync(path.join('posts'))
    // Get the content of each file for searching
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
    const markDownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.mdx'),
        'utf8',
    )

    const { data: frontmatter, content }: any = matter(markDownWithMeta)

    const res = await fetch(
        'https://api.github.com/users/' + frontmatter.author,
    )
    const resData = await res.json()

    return {
        props: {
            posts,
            frontmatter,
            content,
            slug,
            resData,
        },
    }
}
