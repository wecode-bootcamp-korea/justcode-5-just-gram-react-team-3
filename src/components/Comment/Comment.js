import React, { useEffect, useState } from "react";
import "./Comment.scss";

const commentArr = [];
function Comment(props) {
  if (!props.comment) {
    return null;
  }
  const { comment } = props;
  console.log(props, commentArr, 234);
  // useEffect(() => {
  //   console.log(comment, 23);
  //   commentArr.push(comment);
  // }, [comment]);
  commentArr.push(comment);
  console.log(commentArr, commentArr.length);
  const commentList = commentArr.map((comment) => (
    <li key={comment}>
      <a href="">
        <b>yechan</b>
      </a>
      <span className="text">{comment}</span>
      <span className="material-symbols-outlined">favorite</span>
    </li>
  ));
  console.log(commentList);
  return <ul>{commentList}</ul>;
}

export default Comment;
