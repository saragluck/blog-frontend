import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";

export function Home() {
  // Below are all of my consts

  const [posts, setPosts] = useState([]); //sets all posts
  const [currentPost, setCurrentPost] = useState({}); //sets current post

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
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
      <Signup />
      <PostsNew />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        {/* <h2>{currentPost.title}</h2>
        <h3>{currentPost.body}</h3> */}
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
