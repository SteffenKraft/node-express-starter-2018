import React from "react";
import { Route } from "react-router-dom";

import HeaderView from "./header/HeaderView";
import HomeView from "./home/HomeView";
import CatalogView from "./catalog/CatalogView";
import ProductView from "./product/ProductView";

import baseStyles from "../styles/baseStyles";

const App = () => {
  baseStyles();
  return (
    <div>
      <HeaderView />
      <Route exact path="/" component={HomeView} />
      <Route path="/catalog" component={CatalogView} />
      <Route path="/product" component={ProductView} />
    </div>
  );
};

export default App;
