import React, { useState } from "react";
export default function Likepost() {
  const [Like, setLike] = useState(0);
  function LikeToggle() {
    const heartBtn: any = document.querySelector(".heart");
    if (heartBtn.classList.contains("is-active")) {
      heartBtn.classList.toggle("is-active");
      setLike(Like ? Like - 1 : 0);
    } else {
      heartBtn.classList.toggle("is-active");
      console.log("clicking");
      setLike(Like ? Like + 1 : 1);
    }
  }
  return (
    <div>
      <div className="placement  cursor-pointer">
        <div
          className="heart opacity-100 cursor-pointer"
          onClick={() => {
            LikeToggle();
          }}
        ></div>
        <span>{Like}likes</span>
      </div>
    </div>
  );
}
