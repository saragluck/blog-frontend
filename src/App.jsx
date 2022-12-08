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
}
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Blog Post!",
      body: "Hi, I'm the first blog post!",
      image: "https://static.frame.work/aj192kv9jkobd4std75kia0vv100",
    },
    {
      id: 2,
      title: "My Second Blog Post!",
      body: "Hi, I'm the second blog post bla bla bla bla bla bla bla",
      image:
        "https://cb2.scene7.com/is/image/CB2/WarnerTableLampShF16/$web_pdp_main_carousel_sm$/190905021327/warner-table-lamp.jpg",
    },
    {
      id: 3,
      title: "My Third Blog Post!",
      body: "Hi, I'm the third blog post more bla bla bla bla bla bla bla",
      image: "https://www.meijer.com/content/dam/meijer/product/0002/40/0005/98/0002400005988_1_A1C1_0600.png",
    },
  ]);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
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
