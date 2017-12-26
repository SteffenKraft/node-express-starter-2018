import React from "react";
import { Link } from "react-router-dom";

const HeaderView = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/catalog">Catalog</Link>
    <Link to="/product">Product</Link>
  </nav>
);

export default HeaderView;
