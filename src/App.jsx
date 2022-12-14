import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

//The app section is the ONLY PART being rendered! This means I have to create all these separate things and then call them in the App function.
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/new" element={<PostsNew />} />
        <Route path="/posts" element={<PostsIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// App is top level. Then is home, header, footer. Under home is new blog post and all blog posts.
// Home is called the parent
