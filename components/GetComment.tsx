import React, { useState, useEffect } from 'react'
import { submitComment } from '../services'
export default function GetComment({ slug }: any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setcomment] = useState('')
    const [status, setStatus] = useState(false)

    return (
        <div className="border-2 mt-3 px-9 text-center">
            <h1 className="text-2xl mt-3 border-b text-center font-bold">
                Share Your Review
            </h1>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (name && comment && email) {
                        try {
                            submitComment({ slug, name, email, comment })
                            setTimeout(() => {
                                setStatus(true)
                            }, 3000)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }}
            >
                <textarea
                    placeholder="Comment"
                    name="comment"
                    onChange={e => {
                        setcomment(e.target.value)
                    }}
                    className="p-4 mt-3 outline-none w-full bg-slate-100 rounded-lg h-36 focus:ring-2 focus:ring-gray-200  text-gray-700"
                ></textarea>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 text-gray-700">
                    <input
                        placeholder="Name"
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        type="text"
                        className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100 "
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                        className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100"
                        name="email"
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <input
                            type="checkbox"
                            id="storeData"
                            name="storeData"
                            value="true"
                        />
                        <label
                            className="text-gray-500 cursor-pointer"
                            htmlFor="storeData"
                        >
                            Save my name, email in this browser for the next
                            time I comment.
                        </label>
                    </div>
                </div>
                {/* {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )} */}
                <button className="bg-[steelblue] text-center items-center hover:bg-[#3d6c92] text-white font-bold py-2 px-4 rounded-full mb-5">
                    Submit
                </button>
                {status && (
                    <span className="text-xl float-right font-semibold mt-3 text-green-500">
                        Comment submitted for review
                    </span>
                )}
            </form>
        </div>
    )
}
