import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/firstApp">First App</Link> |{" "}
    <Link to="/secondApp">Second App</Link>
  </nav>
);

export default Header;
