import React from 'react'
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiGraphql,
    SiPostman,
    SiRedux,
    SiFirebase,
} from 'react-icons/si'
export default function techs() {
    return (
        <>
            <h1 className="text-center px-2 opacity-70 mb-7">
                Learn Trending tech from insdustry professionals and developers
            </h1>
            <div className="flex flex-row text-center flex-wrap text-3xl gap-3 justify-center mb-8 opacity-50">
                <SiReact />
                <SiNextdotjs />
                <SiTypescript />
                <SiJavascript />
                <SiGraphql />
                <SiPostman />
                <SiRedux />
                <SiFirebase />
            </div>
        </>
    )
}
