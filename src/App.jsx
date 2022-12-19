import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";

//The app section is the ONLY PART being rendered! This means I have to create all these separate things and then call them in the App function.
function App() {
  return (
    <BrowserRouter>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// App is top level. Then is home, header, footer. Under home is new blog post and all blog posts.
// Home is called the parent
