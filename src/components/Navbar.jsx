import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
