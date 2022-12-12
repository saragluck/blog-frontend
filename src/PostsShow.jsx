export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <h3> Description: {props.post.body}</h3>
    </div>
  );
}
