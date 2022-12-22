import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useState } from "react";
import { Modal } from "./Modal";
import axios from "axios";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              My Blog
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                |
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                |
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <a onClick={handleSignupShow} href="#">
                        Signup
                      </a>
                    </li>
                    |
                    <li className="nav-item">
                      <a onClick={handleLoginShow} href="#">
                        Login
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <a onClick={handleLogout} href="#">
                      Logout
                    </a>
                  </li>
                )}
                |
                <li className="nav-item">
                  <a className="nav-link" href="#posts-index">
                    All Posts
                  </a>
                </li>
                |
                <li className="nav-item">
                  <a className="nav-link" href="/posts/new">
                    New Post
                  </a>
                </li>
                |
                <li className="nav-item">
                  <a className="nav-link disabled">IDK</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>

        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login />
        </Modal>
      </header>
    </div>
  );
}

//Write conditions for my login/logout to show/hide based on if there is a jwt present in the application storage

// let authenticationLinks; //sets a variable for the links that do stuff like login and logout and signup
// if (localStorage.jwt === undefined) {
//   authenticationLinks = (
//     <>
//       <li className="nav-item btn btn-outline-danger">
//         <a onClick={handleSignupShow} href="#">
//           Sign Up
//         </a>
//       </li>
//       <li className="nav-item btn btn-outline-danger">
//         <a onClick={handleLoginShow} href="/login">
//           Log In
//         </a>
//       </li>
//     </>
//   );
// } else {
//   authenticationLinks = (
//     <li className="nav-item btn btn-outline-danger">
//       <a onClick={handleLogout} href="#">
//         Logout
//       </a>
//     </li>
//   );
// }

//   return (
//     <><div>
//       <div>
//       <header>
//         <nav className="navbar navbar-expand-lg fixed-top bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               My Blog
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#">
//                     Home
//                   </a>
//                 </li>
//                 {/* {authenticationLinks} */}
//                 {localStorage.jwt === undefined ? (
//                   <><>
//                     <li className="nav-item btn btn-outline-danger">
//                       <a onClick={handleSignupShow} href="#signup">
//                       Signup</a>
//                     </li>
//                   </><li className="nav-item btn btn-outline-danger">
//                       <a onClick={handleLoginShow} href="#login">Login</a>
//                       </li>

//               </> :
//               <li className="<li className = nav-item btn btn-outline-danger">
//                 <a onClick={ handleLogout } href="#logout">
//                   Logout
//                 </a>
//               </li>

//               <li className="nav-item btn btn-outline-danger">
//                 <a className="nav-link" href="#posts-index">
//                   All Posts
//                 </a>
//               </li>
//               <li className="nav-item btn btn-outline-danger">
//                 <Link to="/posts/new">New Post</Link>
//               </li>
//               <li className="nav-item btn btn-outline-danger">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="nav-item btn btn-outline-danger">
//                 <Link to="/about">About</Link>
//               </li>
//               <li className="nav-item btn btn-outline-danger">
//                 <Link to="/posts">All Posts</Link>
//               </li>
//               {/* <li>
//       <button onClick={LogoutLink}>Log Out</button>
//     </li> */}
//             </ul>
//           </div>
//         </div>
//         </div>
//       </nav>
//       <Modal show={isSignupVisible} onClose={handleSignupClose}>
//         <Signup />
//       </Modal>
//     </header><br></br><br></br><br></br>
//     </div>
//   );
// }
