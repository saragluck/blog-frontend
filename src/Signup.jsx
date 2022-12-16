import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signup">
        Sign Up
      </button>
      <div
        className="modal fade"
        id="signup"
        tabIndex="-1"
        role="dialog"
        aria-labeledby="signupLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Signup</h1>
            </div>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div>
                  Name: <input name="name" type="text" />
                </div>
                <div>
                  Email: <input name="email" type="email" />
                </div>
                <div>
                  Password: <input name="password" type="password" />
                </div>
                <div>
                  Password confirmation: <input name="password_confirmation" type="password" />
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
