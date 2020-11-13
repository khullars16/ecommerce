import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import BoxService from "./BoxService";
import ProductCard from "./ProductCard";
import TopDeals from "./TopDeals";
import axios from "axios";
import Loader from "../../layout/loader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products1: null,
      products2: null,
      products3: null,
      loading: false,
    };
  }
   deals1 = ["deals1", "deals2", "deals3"];
   deals2 = ["deals4", "deals5"];
  limit = 24;

  async componentDidMount() {
    this.productArr1 = [];
    this.productArr2 = [];
    this.productArr3 = [];

    const res = await axios.get(
      `https://fakestoreapi.com/products?limit=${this.limit}`
    );

    res.data.map((item) => {
      if (item.id < 8) {
        return this.productArr1.push({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
        });
      }
      if (item.id > 14) {
        return this.productArr3.push({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
        });
      }
      if (7 < item.id < 15) {
        return this.productArr2.push({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
        });
      }
    });

    this.setState({
      products1: this.productArr1,
      products2: this.productArr2,
      products3: this.productArr3,
      loading: true,
    });
  }

  render() {
    return (
      <div className="mt-4">
        {this.state.loading ? (
          <>
            <Banner />
            <BoxService />
            <ProductCard productData={this.state.products1} headings="Deals Of The Day" />
            <TopDeals deals={this.deals1} />
            <ProductCard productData={this.state.products2} headings="Top Best Selling Product" />
            <div className="mt-5">
              <ProductCard productData={this.state.products3} headings="Top Featured Product" />
            </div>
            <TopDeals deals={this.deals2} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Home;
