import Post from "../../components/post/Post";

function Posts(props) {
  const postLists = props.postsState.map((p) => (
    <Post
      id={p.id}
      key={p.id}
      title={p.title}
      author={p.author}
      postClick={() => {
        props.postClick(p);
      }}
    />
  ));

  return <div>{postLists}</div>;
}

export default Posts;
