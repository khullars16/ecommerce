import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", props.productData);
  return (
    <section className="products-section">
      <div className="product-heading">
        <h2>
          {props.headings}
        </h2>
      </div>
      <div className="product-card">
        {props.productData &&
          props.productData.map((items) => {
            return (
              <div className="product-card-item" key={items.id} id={items.id}>
                <div className="inner-card-item">
                  <div className="product-card-img">
                    <img src={items.image} alt="img" />
                  </div>
                  <div className="product-card-description">
                    <Link to={`/product/`+items.id}><h4>{items.title}</h4></Link>
                    <p>Category: {items.category}</p>
                    <p>price: ${items.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProductCard;
