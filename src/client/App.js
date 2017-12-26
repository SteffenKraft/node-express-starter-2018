import React from "react";
import { Route } from "react-router-dom";

import HeaderView from "./components/header/HeaderView";
import HomeView from "./components/home/HomeView";
import CatalogView from "./components/catalog/CatalogView";
import ProductView from "./components/product/ProductView";

import baseStyles from "./styles/baseStyles";

const App = () => {
  // TODO load data instead of console.log it
  const store = fetch("api/stores/5a3813a9514ea4ce01553106");
  store.then(data => data.json()).then(data => console.log(data));

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
