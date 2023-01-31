function Post(props) {
  return (
    <div onClick={props.postClick}>
      <h3>Id: {props.id}</h3>
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.author}</h3>
    </div>
  );
}

export default Post;
