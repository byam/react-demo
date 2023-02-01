import { useState } from "react";

function PostNew(props) {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  return (
    <div>
      <h1>New Post</h1>
      Title:{" "}
      <input
        type="text"
        value={post.title}
        name={"title"}
        label={"title"}
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
        }}
      ></input>
      Author:{" "}
      <input
        type="text"
        value={post.author}
        name={"author"}
        label={"author"}
        onChange={(event) => {
          setPost({ ...post, author: event.target.value });
        }}
      ></input>
      Content:{" "}
      <input
        type="text"
        value={post.content}
        name={"content"}
        label={"content"}
        onChange={(event) => {
          setPost({ ...post, content: event.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          props.newSaveClick(post);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostNew;
