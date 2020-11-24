import React from "react";
import { Link } from "react-router-dom";

const ProductPannel = (props) => {
  console.log(props);

  return (
    <div className="row">
      {props.productData.map((item) => {
        return (
          <div
            className={`${
              props.rowType === "grid"
                ? props.rowno == "4"
                  ? "col-md-3 col-lg-3"
                  : props.rowno == "3"
                  ? "col-md-4 col-lg-4"
                  : "col-md-6 col-lg-6"
                : "col-md-12 col-lg-12"
            } mt-4`}
          >
            <div
              className={`${
                props.rowType === "grid"
                  ? "comman-product-card"
                  : "list-product-card"
              }`}
            >
              <div
                className={`${
                  props.rowType === "grid"
                    ? "outer-product-img"
                    : "list-product-image"
                }`}
              >
                <img src={item.image} alt="" />
              </div>
              <div
                className={`${
                  props.rowType === "grid"
                    ? "outer-product-desc"
                    : "list-product-desc"
                }`}
              >
                <Link to={`/product/${item.id}`}>{item.title}</Link>
                <h6>${item.price}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPannel;
