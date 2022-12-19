import axios from "axios";

export function PostsNew(props) {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response, "post a post!");
      window.location.href = "/";
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New blog post");
    const params = new FormData(event.target);
    handleCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <br />
      <br />
      <br />
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button className="btn btn-light" type="submit">
          Create Blog Post
        </button>
      </form>
    </div>
  );
}
