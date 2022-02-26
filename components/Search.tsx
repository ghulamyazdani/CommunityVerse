import Link from 'next/link'
import React, { useState } from 'react'
export default function Search({ posts, active }: any) {
    const [value, setValue] = useState('something')
    return (
        <div
            className={
                active
                    ? 'search absolute z-50 right-[10%] top-20'
                    : 'search hidden z-50 right-[10%] top-20'
            }
        >
            <form action="">
                <input
                    type="text"
                    placeholder="Search blogs"
                    className="text-black rounded-lg  p-2 focus:outline-none focus:shadow-outline"
                    onChange={e => {
                        e.target.value
                            ? setValue(e.target.value)
                            : setValue('something')
                    }}
                />
                <div className="results absolute overflow-hidden mt-1 z-10 bg-white rounded-lg">
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
                        }
                    })}
                </div>
            </form>
        </div>
    )
}
