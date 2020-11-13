import React from "react";
import Modal from "../../common/Modal";

const Description = (props) => {
  // console.log(props.details);
  return (
    <div className="description-section">
      <div className="product-description">
        <div className="desc-image">
          <img src={props.details.image} alt="img" />
        </div>
        <div className="desc-content">
          <h2>{props.details.title}</h2>
          <h5>Category: {props.details.category}</h5>

          <h4>Price: ${props.details.price}</h4>
          <p>Availability: In Stock</p>
          <ul>
            <li>Soft interior to ensure Electronics and accessories protect</li>
            <li>Hand Strap For keeping your devices safe and handy</li>
            <li>Lightweight, Packed inclued: One Case</li>
            <li>Backed by 100% Money back Guarantee</li>
          </ul>

          <h6>Description: {props.details.description}</h6>
          <button onClick={props.showingModal} className="addtocartbtn">Add to Cart</button>
          <Modal
            modalTitle={props.details.title}
            modalPrice={props.details.price}
            modalId={props.details.id}
            addClass={props.addClass}
            showingModal={props.showingModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
