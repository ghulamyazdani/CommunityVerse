import React from 'react'
import Logo from './Icons/Logo'
const Footer = () => {
    return (
        <>
            <footer className="backdrop-opacity-10 dark:backdrop-opacity-70 backdrop-invert  dark:bg-[#000000]  pb-16 lg:pb-0 p-10  pt-4">
                <div className="flex flex-row justify-around flex-wrap mb-10">
                    <Logo />
                    <div className="flex flex-row gap-7 my-4 flex-wrap">
                        <ul className="flex flex-col gap-2">
                            <li>Roadmaps</li>
                            <li>Authors</li>
                            <li>Top Blogs</li>
                            <li>Mentors</li>
                            <li>About</li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li>Contribute</li>
                            <li>Tags</li>
                            <li>Faq</li>
                        </ul>
                    </div>
                </div>
                <h1 className="created-by pb-0 dark:text-white lg:pb-3">
                    Copyright © All rights reserved.
                </h1>
            </footer>
        </>
    )
}
export default Footer
