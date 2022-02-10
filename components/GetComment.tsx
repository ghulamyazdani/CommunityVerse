import React, { useState, useEffect, useRef } from "react";

export default function GetComment({ slug }: any) {
  const [error, setError] = useState(false);
  const [locastorage, setLocastorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const commentEl = useRef();
  return (
    <div className="border-2 mt-3 px-9 text-center">
      <h1 className="text-2xl mt-3 border-b text-center font-bold">
        Share Your Review
      </h1>
      <textarea
        placeholder="Comment"
        className="p-4 mt-3 outline-none w-full bg-slate-100 rounded-lg h-36 focus:ring-2 focus:ring-gray-200  text-gray-700"
      ></textarea>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 text-gray-700">
        <input
          placeholder="Name"
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100 "
        />
        <input
          placeholder="Email"
          type="email"
          className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100"
        />
      </div>
      <button className="bg-[steelblue] text-center items-center hover:bg-[#3d6c92] text-white font-bold py-2 px-4 rounded-full mb-5">
        Submit
      </button>
    </div>
  );
}
