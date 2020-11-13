import React from "react";
import { Link } from "react-router-dom";

const CModal = (props) => {


  return (
    <>
      <div className={`custom-modal ${props.addClass}`}>
          
        <div className="modal-bg">
        <button className="modal-close" onClick={props.showingModal}>X</button>
        <div className="modal-data">
        <div className="modal-left">
            <img src="/assets/images/product-1.jpg" alt="img" />
          </div>
          <div className="modal-right">
            <h4>Added To Your Bag</h4>
            <h6 className="mt-4">{props.modalTitle}</h6>
            <h5 className="mt-4">${props.modalPrice}</h5>
          </div>
        </div>
          <div className="footer-btn">
            <Link to="" className="footer-btn-link" onClick={props.showingModal}>Continue Shopping</Link>
            <Link to={"/checkout/"+props.modalId} className="footer-btn-link" onClick={()=> console.log(props.modalId)}>View Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CModal;
