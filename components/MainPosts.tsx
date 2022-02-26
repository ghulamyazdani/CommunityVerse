/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { postprop } from '../types/interface'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { GoPrimitiveDot } from 'react-icons/go'

export default function MainPosts({ post }: postprop) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="post dark:text-white gap-7 w-full flex-wrap lg:flex-nowrap justify-center text-center lg:text-left lg:justify-start  lg:w-[60%] items-center flex flex-row align-middle cursor-pointer hover:drop-shadow-3xl  ">
                <img
                    src={post.frontmatter.cover_image}
                    alt={post.frontmatter.title}
                    className="rounded-full object-cover w-28 h-28"
                />

                <div>
                    <h3 className="font-normal font-sans text-3xl mb-2 mt-2">
                        {post.frontmatter.title}
                    </h3>
                    <div className="post-date items-center justify-center lg:justify-start gap-1 flex flex-row text-sm opacity-60">
                        <div>{post.frontmatter.tag}</div>
                        <GoPrimitiveDot className="text-xs" />
                        <div>{post.frontmatter.date}</div>
                    </div>
                    <p className="text-sm align-middle opacity-60 mt-2">
                        {post.frontmatter.excerpt}
                    </p>

                    <div className="link link--arrowed flex flex-row justify-center lg:justify-start gap-2 items-end cursor-pointer">
                        Read More
                        <HiOutlineArrowNarrowRight className="arrow-icon w-6 h-6 " />
                    </div>
                </div>
            </div>
        </Link>
    )
}
