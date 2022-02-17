/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Related } from '../types/interface'
export default function Relatedpost({ posts, slug, tag }: Related) {
    function check(incomingPost: any) {
        const slugTagSplit = tag.toLowerCase().split(',')
        const incomingTagSplit = incomingPost.frontmatter.tag
            .toLowerCase()
            .split(',')
        const intersection = slugTagSplit.filter(element =>
            incomingTagSplit.includes(element),
        )
        if (intersection.length > 0) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="border-2 dark p-4 mt-3 rounded ">
            <h3 className="text-2xl mb-3 border-b text-center font-bold">
                Related post
            </h3>
            {posts.map((post: any, index: number) => {
                if (post.slug !== slug && check(post)) {
                    return (
                        <Link href={`/blog/${post.slug}`} passHref key={index}>
                            <a
                                key={index}
                                className="flex ml-7 content-center ga-4 items-center flex-row cursor-pointer hover:text-black hover:bg-slate-200 rounded-md"
                            >
                                <img
                                    className="w-20 h-20 bg-cover border-2 object-cover rounded-full m-2"
                                    src={post.frontmatter.cover_image}
                                    alt=""
                                />
                                <div className="flex related-text flex-col text-lg justify-center">
                                    <div className="text-sm opacity-60 ">
                                        {post.frontmatter.date}
                                    </div>
                                    <div className="">
                                        {post.frontmatter.title}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                }
            })}
        </div>
    )
}
