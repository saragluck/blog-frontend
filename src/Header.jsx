import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { useState } from "react";
import { Modal } from "./Modal";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              My Blog
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts-index">
                    All Posts
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/posts/new">New Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts">All Posts</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link">
                    Logout?</a> */}
                  <button onClick={LogoutLink}>Log Out</button>
                </li>
                <li className="nav-item">
                  <a onClick={handleSignupShow} href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>
      </header>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
