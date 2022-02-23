/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
export default function Main() {
    return (
        <div className="text-center pt-28 backdrop-opacity-10 backdrop-invert bg-white/30">
            <section className="bg flex flex-col">
                <img
                    className="next"
                    src="./images/logos/next.png"
                    alt="next"
                />
                <img
                    className="sass"
                    src="./images/logos/sass.png"
                    alt="next"
                />
                <img
                    className="node"
                    src="./images/logos/node.png"
                    alt="next"
                />
                <img
                    className="react"
                    src="./images/logos/react.png"
                    alt="next"
                />
                <img
                    className="python"
                    src="./images/logos/python.png"
                    alt="next"
                />
                <img
                    className="tailwind"
                    src="./images/logos/tailwind.png"
                    alt="next"
                />
                <img
                    className="typescript"
                    src="./images/logos/typescript.png"
                    alt="next"
                />
            </section>
            <div className="block">
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
        </div>
    )
}
