import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";

function PostNew(props) {
  const newPostRef = useRef();
  const navigate = useNavigate();

  const addPost = (data) => {
    axios
      .post(`http://localhost:8080/api/v1/posts`, data)
      .then((response) => {
        console.log("Add post");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>New Post</h1>
      <form ref={newPostRef}>
        Title: <input type="text" name={"title"} label={"title"}></input>
        Author: <input type="text" name={"author"} label={"author"}></input>
        Content: <input type="text" name={"content"} label={"content"}></input>
      </form>
      <button
        onClick={() => {
          addPost({
            title: newPostRef.current["title"].value,
            author: newPostRef.current["author"].value,
            content: newPostRef.current["content"].value,
          });
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostNew;
