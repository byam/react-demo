import { useRef } from "react";

function PostNew(props) {
  const newPostRef = useRef();

  return (
    <div>
      <h1>New Post</h1>
      <form ref={newPostRef}>
        Title:{" "}
        <input
          type="text"
          name={"title"}
          label={"title"}
        ></input>
        Author:{" "}
        <input
          type="text"
          name={"author"}
          label={"author"}
        ></input>
        Content:{" "}
        <input
          type="text"
          name={"content"}
          label={"content"}
        ></input>
      </form>
      <button
        onClick={() => {
          props.newSaveClick({
              title: newPostRef.current['title'].value,
              author: newPostRef.current['author'].value,
              content: newPostRef.current['content'].value,
          });
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostNew;
