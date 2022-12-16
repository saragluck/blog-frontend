// import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Update blog post");
    const params = new FormData(event.target);
    // axios.patch(`http://localhost:3000/posts/${props.post.id}`, params).then((response) => {
    //   console.log(response.data);
    //   event.target.reset();
    // });
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <h3> Description: {props.post.body}</h3>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button className="btn btn-light" type="submit">
          Update Blog Post
        </button>
      </form>
    </div>
  );
}
