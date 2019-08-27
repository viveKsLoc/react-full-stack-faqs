import React from "react";
import "../styles/Marquee.scss";
import tags from "../data/tags";

function Marquee({ content, tag }) {
  let filteredContent = content
    .filter(item => item.tags.includes(tag))
    .map(item => (
      <li
        style={{
          paddingRight: "50px",
          paddingLeft: "50px"
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "30px"
          }}
          href={`/faq/${item.id}`}
        >
          {tags.find(tag => tag.name === item.tags[0]) === undefined
            ? ""
            : tags.find(tag => tag.name === item.tags[0]).emoji}
          {item.question}
        </a>
      </li>
    ));

  return (
    <div class="marquee" style={{ width: "100%", marginTop: "10px" }}>
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
