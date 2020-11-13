import React from 'react';
import { Link } from 'react-router-dom';

const Summary = (props) => {
    return (
        <div className="summary-section mt-3">
            <h4>SUMMARY</h4>
            <p><span>Subtotal</span><span>${parseFloat(props.subTotal).toFixed(2)}</span></p>
            <p><span>Tax</span><span>$5.00</span></p>
            <p><span>Delivery Charges</span><span>$10.00</span></p>
            <p><span><b>Order Total</b></span><span><b>${parseFloat(props.subTotal + 5.00 + 10.00).toFixed(2)}</b></span></p>
            <Link>Proceed to Checkout</Link>
        </div>
    );
};

export default Summary;