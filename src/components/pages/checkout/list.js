import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const list = (props) => {
  return (
    <>
      <h2>Shopping Cart</h2>

      
      <Table bordered className="checkout-table mt-4">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {props.checkoutItem.map((item, index) => {
            return (
              <tr>
                <td>
                  <img src={item.image} alt="img" /> {item.title}
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    onMouseDown={props.decQuantity}
                    onMouseUp={props.subTotalfun}
                  >
                    -
                  </button>{" "}
                  <span> {props.quant} </span>{" "}
                  <button
                    onMouseDown={props.incQuantity}
                    onMouseUp={props.subTotalfun}
                  >
                    +
                  </button>
                </td>
                <td>${props.subTotal}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="table-footered mt-4">
        <Link to="/">Continue Shopping</Link>
        <Link onClick={props.clearCart}>Clear Shopping Cart</Link>
      </div>
    </>
  );
};

export default list;
