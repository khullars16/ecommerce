import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/home/Home";
import { Route } from "react-router-dom";
import Product from "./components/pages/singleProductPage/Product";
import Checkout from "./components/pages/checkout/Checkout";
import Electronics from "./components/pages/electronics/electronics";
import Jewelery from "./components/pages/jewelery/jewelery";
import Men from "./components/pages/men/men";
import Women from "./components/pages/women/women";
// import { UserProvider } from "./userContext";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="c-body">
        <div className="app-view">
          <div className="container-style">




          <Route exact path="/" component={Home} />



          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/electronics" component={Electronics} />
          <Route exact path="/jewelery" component={Jewelery} />
          <Route exact path="/men-clothing" component={Men} />
          <Route exact path="/women-clothing" component={Women} />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
