export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New blog post");
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onPostCreate(params);
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
