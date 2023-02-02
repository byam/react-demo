import { useContext } from "react";
import { SelectedPostContext } from "../../context/SelectedPost";
import Comment from "../comment/Comment";

function PostDetails(props) {
  console.log("PostDetails Rendered");

  const post = useContext(SelectedPostContext);

  return (
    <div>
      <h1>Post Details</h1>
      <h3>Title: {post.title}</h3>
      <h3>Author: {post.author}</h3>
      <h3>Content: {post.content}</h3>
      <div style={{ textAlign: "left" }}>
        Comments <br />
        {post.comments != null
          ? post.comments.map((comment) => {
              return <Comment comment={comment} key={comment.id} />;
            })
          : null}
      </div>
      <button onClick={() => props.editClick(post.id)}>Edit</button>
      <button onClick={() => props.deleteClick(post.id)}>Delete</button>
    </div>
  );
}

export default PostDetails;
