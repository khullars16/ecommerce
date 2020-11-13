import React from 'react';

const BoxService = () => {
    return (
        <section className="box-service">
            <ul>
                <li>
                    <div className="box-service-img">
                        <img src="/assets/images/introduct1.svg" alt="" />
                    </div>
                    <div className="box-service-content">
                        <h5>Free Delivery</h5>
                        <p>For all orders over $120</p>
                    </div>
                </li>
                <li>
                    <div className="box-service-img">
                        <img src="/assets/images/introduct2.svg" alt="" />
                    </div>
                    <div className="box-service-content">
                        <h5>Safe Payment</h5>
                        <p>100% secure payment</p>
                    </div>
                </li>
                <li>
                    <div className="box-service-img">
                        <img src="/assets/images/introduct3.svg" alt="" />
                    </div>
                    <div className="box-service-content">
                        <h5>Shop With Confidence</h5>
                        <p>If goods have problems</p>
                    </div>
                </li>
                <li>
                    <div className="box-service-img">
                        <img src="/assets/images/introduct4.svg" alt="" />
                    </div>
                    <div className="box-service-content">
                        <h5>24/7 Help Center</h5>
                        <p>Dedicated 24/7 support</p>
                    </div>
                </li>
                <li>
                    <div className="box-service-img">
                        <img src="/assets/images/introduct5.svg" alt="" />
                    </div>
                    <div className="box-service-content">
                        <h5>Friendly Services</h5>
                        <p>30 day satisfaction guarantee</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default BoxService;