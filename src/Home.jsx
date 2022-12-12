import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };
  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleIndexPosts = () => {
    console.log("Get the posts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <button onClick={handleShowPost}>GIMME DAT MODAL!</button>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        Test
      </Modal>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
