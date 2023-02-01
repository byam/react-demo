import axios from "axios";
import { useEffect, useState } from "react";
import PostDetails from "../components/postDetails/PostDetails";
import PostEdit from "../components/postEdit/PostEdit";
import PostNew from "../components/postNew/postNew";
import Posts from "./posts/Posts";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [postsState, setPostsState] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [flag, setFlag] = useState(0);

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

  const updatePost = async (post) => {
    axios
      .put(`http://localhost:8080/api/v1/posts/${post.id}`, post)
      .then((response) => {
        console.log("Updated post: " + post.id);
        setSelectedPost(post);
        setFlag(setFlag + 1);
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
        setFlag(setFlag + 1);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addPost = (post) => {
    axios
      .post(`http://localhost:8080/api/v1/posts`, post)
      .then((response) => {
        console.log("Add post");
        setFlag(setFlag + 1);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const postClick = (post) => {
    console.log("postClick! " + post.id);
    setSelectedPost(post);
    setIsEditing(false);
    setIsAdding(false);
  };

  const editClick = (id) => {
    console.log("editClick! " + id);
    setIsEditing(true);
  };

  const deleteClick = (id) => {
    console.log("deleteClick! " + id);
    deletePost(id);
    setSelectedPost(null);
  };

  const editSaveClick = (post) => {
    console.log("editSaveClick! " + post.id);
    updatePost(post);
    setIsEditing(false);
  };

  const addClick = () => {
    console.log("addClick! ");
    setIsAdding(true);
    setSelectedPost(null);
  };

  const newSaveClick = (post) => {
    console.log("newSaveClick!");
    addPost(post);
    setIsAdding(false);
  };

  useEffect(() => {
    fetchPosts();
    setLoading(false);
  }, [flag]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Posts postsState={postsState} postClick={postClick} />

      {!isAdding && <button onClick={() => addClick()}>Add Post</button>}

      {isAdding && (
        <PostNew newSaveClick={newSaveClick}/>
      )}

      {selectedPost && isEditing === false && (
        <PostDetails
          post={selectedPost}
          editClick={editClick}
          deleteClick={deleteClick}
        />
      )}

      {isEditing && (
        <PostEdit post={selectedPost} editSaveClick={editSaveClick} />
      )}
    </div>
  );
}

export default Dashboard;
