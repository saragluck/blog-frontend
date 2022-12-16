export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <br></br>
      <br></br>

      <br />
      <h1>All Posts!!</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <img src={post.image} alt="" />
          <br />
          <button className="btn btn-light" onClick={() => props.onSelectPost(post)}>
            More Info!
          </button>
        </div>
      ))}
    </div>
  );
}
