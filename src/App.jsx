function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts">
          <h2>My First Blog Post</h2>
          <p> Hi, I'm the first blog post!</p>
          <img src="https://static.frame.work/aj192kv9jkobd4std75kia0vv100" alt="" />
        </div>
        <div className="posts">
          <h2>My Second Blog Post</h2>
          <p> Hi, I'm the second blog post bla bla bla bla bla bla bla </p>
          <img
            src="https://cb2.scene7.com/is/image/CB2/WarnerTableLampShF16/$web_pdp_main_carousel_sm$/190905021327/warner-table-lamp.jpg"
            alt=""
          />
        </div>
        <div className="posts">
          <h2>My Third Blog Post</h2>
          <p> Hi, I'm the third blog post more bla bla bla bla bla bla bla </p>
          <img
            src="https://www.meijer.com/content/dam/meijer/product/0002/40/0005/98/0002400005988_1_A1C1_0600.png"
            alt=""
          />
        </div>
      </div>

      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;
