import React, { useEffect, useState } from 'react'
import { getLike, putLikes } from '../services/index'
export default function Likepost({ slug }: { slug: string }) {
    const [Like, setLike] = useState(0)
    useEffect(() => {
        getLike(slug).then(res => {
            setLike(res)
        })
        if (window.localStorage.getItem(slug) === 'true') {
            const heartBtn: any = document.querySelector('.heart')
            heartBtn.classList.add('is-active')
        }
    }, [slug])
    function LikeToggle() {
        const heartBtn: any = document.querySelector('.heart')
        if (heartBtn.classList.contains('is-active')) {
            heartBtn.classList.add('is-active')
        } else {
            heartBtn.classList.add('is-active')

            if (window.localStorage.getItem(slug) !== 'true') {
                putLikes({ slug: slug, likes: Like + 1 })
                getLike(slug).then(res => {
                    setLike(res)
                })
            }
            window.localStorage.setItem(slug, 'true')
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
