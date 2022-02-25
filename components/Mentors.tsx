/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Mentors() {
    return (
        <>
            <h1 className="text-center text-4xl mb-4">Mentors</h1>

            <div className="flex flex-row gap-20 flex-wrap justify-center my-10">
                <div className="flex flex-col align-center justify-center text-center items-center w-60 ">
                    <img
                        className="rounded-full w-36 h-36"
                        src="https://avatars.githubusercontent.com/u/55938346?v=4"
                        alt=""
                    />
                    <span className="text-2xl">Ghulam Yazdani</span>
                    <span className="text-sm opacity-60">
                        Full stack Developer & Open Source
                    </span>
                </div>
                <div className="flex flex-col align-center justify-center text-center items-center w-60 ">
                    <img
                        className="rounded-full w-36 h-36"
                        src="https://avatars.githubusercontent.com/u/72148261?v=4"
                        alt=""
                    />
                    <span className="text-2xl">Harsha Sumanchandra</span>
                    <span className="text-sm opacity-60">
                        Backend Developer
                    </span>
                </div>
                <div className="flex flex-col align-center justify-center text-center items-center w-60 ">
                    <img
                        className="rounded-full w-36 h-36"
                        src="https://avatars.githubusercontent.com/u/75872316?v=4"
                        alt=""
                    />
                    <span className="text-2xl">Anshumaan Kumar Prasad</span>
                    <span className="text-sm opacity-60">
                        Opensource Contributor
                    </span>
                </div>
            </div>
        </>
    )
}
