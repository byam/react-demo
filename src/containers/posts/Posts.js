import Post from "../../components/Post";

function Posts(props) {

  const postLists = props.postsState.map((p) => (
    <Post id={p.id} key={p.id} title={p.title} author={p.author} />
  ));

  return <div>{postLists}</div>;
}

export default Posts;
