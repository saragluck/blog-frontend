import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { Signup } from "./Signup"

export function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
          <div className="container-fluid">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Signup</Link>
            <a className="navbar-brand" href="#">
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
                  <a className="nav-link" href="#posts-new">
                    New Post
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link">
                    Logout?</a> */}
                  <button onClick={LogoutLink}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
