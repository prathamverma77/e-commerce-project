import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-body-tertiary text-dark mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">E-Commerce</h5>
            <p className="small text-muted">
              A simple MERN based e-commerce application for learning and
              practice purposes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-decoration-none text-dark">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-decoration-none text-dark">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/policy" className="text-decoration-none text-dark">
                  Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>Email: support@ecommerce.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>
                <Link to="/contact" className="btn btn-sm btn-outline-primary mt-2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
