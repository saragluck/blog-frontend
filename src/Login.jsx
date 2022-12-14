// should POST to localhost:3000/sessions
// make a form
import axios from "axios";
export function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("handleLogin");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button className="btn btn-light" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
