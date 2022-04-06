/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Mentor } from '../types/interface'

export default function MentorCard({
    name,
    position,
    image,
    description,
}: Mentor) {
    return (
        <div>
            <div className="flex flex-col align-center justify-center text-center items-center w-60 ">
                <img
                    className="rounded-full w-36 h-36"
                    src={image}
                    alt={name}
                />
                <span className="text-2xl">{name}</span>
                <span className="text-sm opacity-60">{position}</span>
            </div>
        </div>
    )
}
