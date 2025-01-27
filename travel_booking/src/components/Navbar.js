import React from "react";
// import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar=()=>{
    <div className="collapse navbar-collapse" id="ftco-nav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/destination" className="nav-link">Destination</Link>
      </li>
      <li className="nav-item">
        <Link to="/hotel" className="nav-link">Hotel</Link>
      </li>
      <li className="nav-item">
        <Link to="/blog" className="nav-link">Blog</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/login_logout" className="nav-link">Login_Logout</Link>
      </li>
    </ul>
  </div>
};

export default Navbar;