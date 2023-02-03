import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Comment from "../comment/Comment";
import "./PostDetails.css";

function PostDetails(props) {
  console.log("PostDetails Rendered");

  const [postState, setPostState] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchPost = async (id) => {
    if (id == null) return;

    axios
      .get(`http://localhost:8080/api/v1/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPostState(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/posts/${id}`)
      .then((response) => {
        console.log("Delete post: " + id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPost(params.id);
  }, [params.id]);

  let postDetails = null;
  if (params.id) {
    postDetails = (
      <div className="PostDetail">
        <h1>Post Details</h1>
        <h3>Title: {postState.title}</h3>
        <h3>Author: {postState.author}</h3>
        <h3>Content: {postState.content}</h3>
        <div style={{ textAlign: "left" }}>
          Comments <br />
          {postState.comments != null
            ? postState.comments.map((comment) => {
                return <Comment comment={comment} key={comment.id} />;
              })
            : null}
        </div>
        <button onClick={() => navigate(`/posts/${params.id}/edit`)}>
          Edit
        </button>
        <button onClick={() => deletePost(postState.id)}>Delete</button>
      </div>
    );
  }
  return postDetails;
}

export default PostDetails;
