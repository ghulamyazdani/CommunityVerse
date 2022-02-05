import React from "react";
export default function Likepost() {
  function LikeToggle() {
    const heartBtn: any = document.querySelector(".heart");
    heartBtn.classList.toggle("is-active");
    console.log("clicking");
  }
  return (
    <div>
      <div className="placement   cursor-pointer">
        <div
          className="heart opacity-100 cursor-pointer"
          onClick={() => {
            LikeToggle();
          }}
        ></div>
        <span>10 like</span>
      </div>
    </div>
  );
}
