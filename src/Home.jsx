import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
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
      <Modal show={true}>
        <p>Sample</p>
      </Modal>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
