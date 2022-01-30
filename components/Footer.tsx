import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4682B4] p-3">
      <div className="created-by">Copyright © All rights reserved.</div>
      <div className="foot">
        <a
          href="https://github.com/ghulamyazdani/CommunityBlog/blob/main/README.md"
          target="blank"
        >
          <span>About</span>
        </a>
        <a href="https://github.com/ghulamyazdani/CommunityBlog" target="blank">
          <span>Source</span>
        </a>
        <a
          href="https://github.com/ghulamyazdani/CommunityBlog/blob/master/LICENSE"
          target="blank"
        >
          <span>Licence</span>
        </a>
      </div>
      <div className="created-by">
        created by{" "}
        <a href="https://twitter.com/iamyazreza" target="blank">
          <b>@ghulamyazdani</b>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
