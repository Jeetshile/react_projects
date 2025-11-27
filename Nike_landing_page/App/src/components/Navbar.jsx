import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="brand-lg">
        <img src="./public/images/brand_logo.png" alt="brand-logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
