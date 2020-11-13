import React, { Component } from "react";
import Description from "./Description";
import axios from "axios";
import Loader from "../../layout/loader";
import MoreDetails from "./MoreDetails";
import NavData from "./NavData";

class Product extends Component {
  state = {
    details: {
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
    loading: false,
    list: "Details",
    modalShow: false,
  };

  async componentDidMount() {
    const catchId = this.props.match.params.id;
    // console.log(catchId);

    const res = await axios.get(`https://fakestoreapi.com/products/${catchId}`);

    this.setState({
      details: {
        id: res.data.id,
        title: res.data.title,
        price: res.data.price,
        description: res.data.description,
        image: res.data.image,
        category: res.data.category,
      },
      loading: true,
    });
  }

  menuToggle = (e) => {
    this.setState({ list: e });
  };

  showingModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
    console.log(this.state.modalShow);
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            <Description
              details={this.state.details}
              showingModal={this.showingModal}
              addClass={this.state.modalShow ? "modal-show" : "modal-hide"}
            />
            <MoreDetails menuToggle={this.menuToggle} />
            <NavData toShow={this.state.list} />
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Product;
