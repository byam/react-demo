import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

function PostEdit(props) {
  const location = useLocation();
  console.log(location);

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

  const updatePost = async (post) => {
    axios
      .put(`http://localhost:8080/api/v1/posts/${post.id}`, post)
      .then((response) => {
        console.log("Updated post: " + post.id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPost(params.id);
  }, [params.id]);

  return (
    <div>
      <h1>Edit Post</h1>
      <p>Id : {postState.id}</p>
      Title:{" "}
      <input
        type="text"
        value={postState.title}
        name={"title"}
        label={"title"}
        onChange={(event) => {
          setPostState({ ...postState, title: event.target.value });
        }}
      ></input>
      Author:{" "}
      <input
        type="text"
        value={postState.author}
        name={"author"}
        label={"author"}
        onChange={(event) => {
          setPostState({ ...postState, author: event.target.value });
        }}
      ></input>
      Content:{" "}
      <input
        type="text"
        value={postState.content}
        name={"content"}
        label={"content"}
        onChange={(event) => {
          setPostState({ ...postState, content: event.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          updatePost(postState);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default PostEdit;
