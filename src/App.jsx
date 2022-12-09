import axios from "axios";
import { useState } from "react";

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}
function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All of the Posts</h1>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2022 Almost 2023!</p>
      </footer>
    </div>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("Get the posts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndexPosts}> Load Posts</button>
    </div>
  );
}
//The app section is the ONLY PART being rendered! This means I have to create all these separate things and then call them in the App function.
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

// App is top level. Then is home, header, footer. Under home is new blog post and all blog posts.
// Home is called the parent
