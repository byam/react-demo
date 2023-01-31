import { useState } from "react";
import PostDetails from "../components/postDetails/PostDetails";
import PostEdit from "../components/postEdit/PostEdit";
import Posts from "./posts/Posts";

function Dashboard() {
  const [postsState, setPostsState] = useState([
    { id: 111, title: "Happiness", author: "John", content: "Content ..." },
    { id: 112, title: "MIU", author: "Dean", content: "Content ..." },
    { id: 113, title: "Enjoy Life", author: "Jasmine", content: "Content ..." },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const postClick = (post) => {
    console.log("postClick! " + post.id);
    setSelectedPost(post);
    setIsEditing(false);
  };

  const editClick = (id) => {
    console.log("editClick! " + id);
    setIsEditing(true);
  };

  const deleteClick = (id) => {
    console.log("deleteClick! " + id);
    const newPosts = postsState.filter((p) => p.id !== id);
    setPostsState(newPosts);
    setSelectedPost(null);
  };

  const saveClick = (post) => {
    console.log("saveClick! " + post.id);
    const newPosts = postsState.map((p) => (p.id === post.id ? post : p));
    setPostsState(newPosts);
    setIsEditing(false);
  };

  return (
    <div>
      <Posts postsState={postsState} postClick={postClick} />

      {selectedPost && isEditing === false && (
        <PostDetails
          post={selectedPost}
          editClick={editClick}
          deleteClick={deleteClick}
        />
      )}

      {isEditing && <PostEdit post={selectedPost} saveClick={saveClick} />}
    </div>
  );
}

export default Dashboard;
