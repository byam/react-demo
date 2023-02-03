import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import PostDetails from "../../components/postDetails/PostDetails";

function Posts(props) {
  const [postsState, setPostsState] = useState([]);

  const fetchPosts = async () => {
    console.log("fetchPosts rendered!");
    axios
      .get("http://localhost:8080/api/v1/posts")
      .then((response) => {
        console.log(response.data);
        setPostsState(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postLists = postsState.map((p) => (
    <Link to={`${p.id}`} key={p.id}>
      <Post id={p.id} key={p.id} title={p.title} author={p.author} />
    </Link>
  ));

  return (
    <div className="Post">
      {postLists}
      <PostDetails />
      {/* <PostEdit /> */}
    </div>
  );
}

export default Posts;
