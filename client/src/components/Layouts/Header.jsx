import { NavLink, Link } from "react-router-dom";
import React from "react";
import toast from "react-hot-toast";
import { Badge } from "antd";


import { useAuth } from "../../context/auth";
import { useCart } from "../../context/Cart";




function Header() {
  const { auth, setAuth } = useAuth();
  const [cart, setCart] = useCart();

  const handleLogout = () => {
  setAuth({
    ...auth, 
    user: null,
    token:"",
  });
  localStorage.removeItem("auth");
  toast.success("logout successfull");
};

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                CartPage
              </NavLink>
              <NavLink className="nav-link" to="/policy">
                Policy
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contactus
              </NavLink>
              <NavLink className="nav-link" to="/pagenotfound">
                Pagenotfound
              </NavLink>

              {!auth?.user? (
                <>
                  <NavLink
                    to="/login"
                    className="btn btn-primary justify-content-right"
                  >
                    Login
                  </NavLink>
                  <NavLink to="/register" className="btn btn-success ms-2">
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          className="btn btn-primary justify-content-right"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item"></li>
              <Badge count={cart?.length} showZero>
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
              </Badge>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
