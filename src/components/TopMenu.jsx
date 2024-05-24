import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../reducers";
import  './header.css'
const TopMenu = () => {
const { cart } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
              <img alt="logo" src="../../images/logo.jpeg" />
            </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse topbar-container" id="navbarSupportedContent">
          <ul className="navbar-nav">
          
          </ul>
          <div className="col-md-4 cart-profile-container">
            <div className="position-relative d-inline me-3">
              <Link to="/cart" className="btn btn-primary">
                <i className="bi bi-cart3"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                {[...new Set(cart.map(obj => obj.id))].length}
                </div>
              </Link>
            </div>
            {/* <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary rounded-circle border me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light"></i>
              </button>
              <ul className="dropdown-menu dropdown-position">
                <li >
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-person-square"></i> My Profile
                  </Link>
                </li>
                <li>
                 
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-list-check text-primary"></i> Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-heart-fill text-danger"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-bell-fill text-primary"></i>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-info-circle-fill text-success"></i>
                    Support
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-door-closed-fill text-danger"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
