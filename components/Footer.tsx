import React from 'react'
import Logo from './Icons/Logo'
const Footer = () => {
    return (
        <>
            <footer className="backdrop-opacity-10 dark:backdrop-opacity-70 backdrop-invert  dark:bg-[#000000] bg-white/30 pb-16 lg:pb-0 p-10  pt-4">
                <div className="flex flex-row justify-around flex-wrap">
                    <Logo />
                    <div className="flex flex-row gap-7 my-4 flex-wrap">
                        <ul>
                            <li>Roadmaps</li>
                            <li>Authors</li>
                            <li>Top Blogs</li>
                            <li>Mentors</li>
                            <li>About</li>
                        </ul>
                        <ul>
                            <li>Contribute</li>
                            <li>Tags</li>
                            <li>Faq</li>
                        </ul>
                    </div>
                </div>
                <div className="created-by">
                    Copyright © All rights reserved.
                </div>
            </footer>
        </>
    )
}
export default Footer
