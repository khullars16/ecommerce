import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/home/Home";
import { Route } from "react-router-dom";
import Product from "./components/pages/singleProductPage/Product";
import Checkout from "./components/pages/checkout/Checkout";
import Computer from "./components/pages/computer/computer";
// import { UserProvider } from "./userContext";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="c-body">
        <div className="app-view">
          <div className="container-style">


{/* <UserProvider value="shivam"> */}


          <Route exact path="/" component={Home} />

          {/* </UserProvider> */}

          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/computer" component={Computer} />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
