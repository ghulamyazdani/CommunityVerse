import React, { useEffect, useState } from 'react'
import { getLike } from '../services/index'
export default function Likepost({ slug }: { slug: string }) {
    const [Like, setLike] = useState(0)
    useEffect(() => {
        getLike(slug).then(res => {
            setLike(res)
        })
    }, [slug])
    function LikeToggle() {
        const heartBtn: any = document.querySelector('.heart')
        if (heartBtn.classList.contains('is-active')) {
            heartBtn.classList.toggle('is-active')
            setLike(Like ? Like - 1 : 0)
        } else {
            heartBtn.classList.toggle('is-active')
            console.log('clicking')
            setLike(Like ? Like + 1 : 1)
        }
    }
    return (
        <div>
            <div className="placement">
                <div
                    className="heart opacity-100 cursor-pointer"
                    onClick={() => {
                        LikeToggle()
                    }}
                ></div>
                <span className="ml-[-1rem]">{Like} likes</span>
            </div>
        </div>
    )
}
