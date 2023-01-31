import { useState } from "react";

function PostEdit(props) {
  const [post, setPost] = useState({
    id: props.post.id,
    title: props.post.title,
    author: props.post.author,
    content: props.post.content,
  });

  return (
    <div>
      <h1>Edit Post</h1>
      <p>Id : {post.id}</p>
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
          props.saveClick(post);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostEdit;
