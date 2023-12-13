import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark box-shadow mb-3">
          {/* ------ */}
          <div className="container-fluid">
            <Link to="" className="navbar-brand">
             MimiMango.Web
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* ------ */}
            
            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="home" className="nav-link">
                    Home
                  </Link>
                </li>

                {/* ------ */}

                <li className="nav-item">
                  <Link to="order" className="nav-link">
                    Manage Order
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Cart/CartIndex">
                    &nbsp; <i className="bi bi-cart"></i> &nbsp;
                  </a>
                </li>
              </ul>

              {/* ------ */}

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="login" className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
