import { useState } from "react";
import Posts from "./posts/Posts";

function Dashboard() {
  const [postsState, setPostsState] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ]);

  const [title, setTitle] = useState("");

  const changeButtonClicked = () => {
    console.log("changeButtonClicked!");
    const copyPostsState = [...postsState];
    copyPostsState[0].title = title;
    setPostsState(copyPostsState);
    setTitle("");
  };

  return (
    <div>
      <Posts postsState={postsState} />
      <input
        type="text"
        value={title}
        name={"name"}
        label={"name"}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <button onClick={changeButtonClicked}>Change Title</button>
    </div>
  );
}

export default Dashboard;
