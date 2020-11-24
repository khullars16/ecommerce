import React, { Component } from "react";
import axios from "axios";
import Loader from "../../layout/loader";
import SidePannel from "./SidePannel";
import ProductPannel from "./ProductPannel";
import ToolBar from "./ToolBar";

class Women extends Component {
  state = {
    details: [],
    loading: false,
    list: "Details",
    modalShow: false,
    rowType: "grid",
    rowno: 4
  };

  category = "women clothing";

  async componentDidMount() {
    this.electronicsArr = [];
    const res = await axios.get(`https://fakestoreapi.com/products/category/${this.category}`);

    res.data.map((item) => {
      return this.electronicsArr.push({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
      });
    });

    this.setState({
      details: this.electronicsArr,
      loading: true,
    });
    console.log(this.state.details);
  };

  rowShow = (e) => {
    this.setState({ rowType: e });
  };

  rowCount = (e) => {
    this.setState({ rowno: e });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            <div className="row">
              <div className="col-md-2 col-lg-2">
                <SidePannel productData={this.state.details} />
              </div>
              <div className="col-md-10 col-lg-10">
                <ToolBar rowShow={this.rowShow} rowCount={this.rowCount} />
                <ProductPannel
                  productData={this.state.details}
                  rowType={this.state.rowType}
                  rowno={this.state.rowno}
                />
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

export default Women;
