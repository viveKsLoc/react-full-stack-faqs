import React from "react";
import "./Marquee.scss";

function Marquee({ content }) {
  let filteredContent = content.map(item => (
    <li>
      <a>
        {tags.find(tag => tag.name === item.tags[0]) === undefined
          ? ""
          : tags.find(tag => tag.name === item.tags[0]).emoji}{" "}
        {item.question}
      </a>
    </li>
  ));

  return (
    <div class="marquee" style={{ width: "100%", margin: "30px" }}>
      <div class="marquee__content">
        <ul class="list-inline">{filteredContent.slice(0, 10)}</ul>
      </div>
      <div class="marquee__content">
        <ul class="list-inline">{filteredContent.slice(0, 10)}</ul>
      </div>
    </div>
  );
}

export default Marquee;
