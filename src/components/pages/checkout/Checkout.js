import React, { Component, Fragment } from "react";
import axios from "axios";
import List from "./list";
import Summary from "./Summary";
import Loader from "../../layout/loader";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutItem: [],
      loading: false,
      quant: 1,
      subTotal: null,
    };
  }

  async componentDidMount() {
    const checkoutArr = [];
    const catchId = this.props.match.params.id;
    const res = await axios.get(`https://fakestoreapi.com/products/${catchId}`);

    checkoutArr.push({
      id: res.data.id,
      title: res.data.title,
      price: res.data.price,
      image: res.data.image,
    });

    this.setState({ checkoutItem: checkoutArr, loading: true });
    this.setState({ subTotal: checkoutArr[0].price });

    console.log(this.state.checkoutItem);

    // console.log(typeof(this.state.checkoutItem[0].price))
  }

  incQuantity = () => {
    if (this.state.quant < 10) {
      this.setState({ quant: this.state.quant + 1 });
    }
    // this.subTotal()
  };

  decQuantity = () => {
    if (this.state.quant > 0) {
      this.setState({ quant: this.state.quant - 1 });
    }
    // this.subTotal()
  };

  subTotal = () => {
    this.setState({
      subTotal: this.state.quant * this.state.checkoutItem[0].price,
    });
    console.log(this.state.subTotal);
  };

  clearCart = () => {
    this.setState({checkoutItem: []})
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <List
                  checkoutItem={this.state.checkoutItem}
                  quant={this.state.quant}
                  incQuantity={this.incQuantity}
                  decQuantity={this.decQuantity}
                  subTotal={this.state.subTotal}
                  subTotalfun={this.subTotal}
                  clearCart={this.clearCart}
                />
              </div>
              <div className="col-md-3 col-lg-3 mt-5">
                <Summary subTotal={this.state.subTotal} />
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Checkout;
