import { useContext, useState } from "react";
import { SelectedPostContext } from "../../context/SelectedPost";

function PostEdit(props) {
  const selectedPost = useContext(SelectedPostContext);

  const [post, setPost] = useState({
    id: selectedPost.id,
    title: selectedPost.title,
    author: selectedPost.author,
    content: selectedPost.content,
    comments: selectedPost.comments,
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
          props.editSaveClick(post);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostEdit;
