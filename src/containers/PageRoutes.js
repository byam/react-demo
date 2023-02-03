import { Navigate, Route, Routes } from "react-router-dom";
import PostDetails from "../components/postDetails/PostDetails";
import PostEdit from "../components/postEdit/PostEdit";
import PostNew from "../components/postNew/PostNew";
import Posts from "./posts/Posts";

export default function PageRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="/posts" element={<Posts />}>
        <Route path=":id" element={<PostDetails />} />
      </Route>
      {/* <Route path="/posts/:id" element={<PostDetails/>}/> */}
      <Route path="/posts/:id/edit" element={<PostEdit />} />
      <Route path="/posts/edit" element={<PostEdit />} />
      <Route path="/create-post" element={<PostNew />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
