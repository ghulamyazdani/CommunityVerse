import React, { useState, useEffect } from "react";
import { submitComment } from "../services";
export default function GetComment({ slug }: any) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage]: any = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData]: any = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });
  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e: any) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState: any) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState: any) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };
  return (
    <div className="border-2 mt-3 px-9 text-center">
      <h1 className="text-2xl mt-3 border-b text-center font-bold">
        Share Your Review
      </h1>
      <textarea
        placeholder="Comment"
        onChange={onInputChange}
        className="p-4 mt-3 outline-none w-full bg-slate-100 rounded-lg h-36 focus:ring-2 focus:ring-gray-200  text-gray-700"
      ></textarea>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 text-gray-700">
        <input
          placeholder="Name"
          onChange={onInputChange}
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100 "
        />
        <input
          placeholder="Email"
          onChange={onInputChange}
          type="email"
          className="py-2 px-4 outline-none w-full rounded-lg bg-slate-100"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            onChange={onInputChange}
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      <button
        onClick={handlePostSubmission}
        className="bg-[steelblue] text-center items-center hover:bg-[#3d6c92] text-white font-bold py-2 px-4 rounded-full mb-5"
      >
        Submit
      </button>
      {showSuccessMessage && (
        <span className="text-xl float-right font-semibold mt-3 text-green-500">
          Comment submitted for review
        </span>
      )}
    </div>
  );
}
