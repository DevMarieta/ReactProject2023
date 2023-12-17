import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Header = () => {
  console.log("HELLO FROM HEADER");

  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark box-shadow mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mimi Am... Am :)
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {user && user.role === "ADMIN" && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Content Management
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown">
                      <li>
                        <Link to="/Coupon" className="dropdown-item">
                          Coupon
                        </Link>
                      </li>
                      <li>
                        <Link to="/Product" className="dropdown-item">
                          Product
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link to="/Cart" className="nav-link">
                  &nbsp; <i className="bi bi-cart"></i> &nbsp;
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Register">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Hello {user.name}</span>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        logoutUser();
                        // sessionStorage.removeItem("okUser");
                      }}
                      className="nav-link"
                      to="/">
                      Logout
                      {/* https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component */}
                      {/* {sessionStorage.removeItem("key")} */}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
