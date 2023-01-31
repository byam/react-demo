function PostDetails(props) {
  return (
    <div>
      <h1>Post Details</h1>
      <h3>Title: {props.post.title}</h3>
      <h3>Author: {props.post.author}</h3>
      <h3>Content: {props.post.content}</h3>
      <button onClick={() => props.editClick(props.post.id)}>Edit</button>
      <button onClick={() => props.deleteClick(props.post.id)}>Delete</button>
    </div>
  );
}

export default PostDetails;
