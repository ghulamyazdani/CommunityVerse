/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Modal from './Modal'
export default function Mentors() {
    return (
        <div id="mentors" className="flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl mb-4">Mentors</h1>
            <h1 className="opacity-70 px-4 text-center">
                Get your issues resolved by our mentors ,yes its all free just
                go ahead and asked them for help in any sort of issues{' '}
            </h1>
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
                    <span className="text-xl">Harsha Sumanchandra</span>
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
                    <span className="text-xl">Anshumaan Kr Prasad</span>
                    <span className="text-sm opacity-60">
                        Opensource Contributor
                    </span>
                </div>

                <Modal></Modal>
            </div>

            <p className="post link--arrowed border-2 py-1 px-2 rounded-lg m-0 items-end cursor-pointer text-center text-md my-16 flex flex-row justify-center  gap-3">
                View All Mentors
                <HiOutlineArrowNarrowRight className="arrow-icon w-6 h-6" />
            </p>
        </div>
    )
}
