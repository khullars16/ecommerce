import React from "react";

const SidePannel = (props) => {
  return (
    <>
      <h3 className="mb-5">Top Rated</h3>
      <marquee direction="up" height="1000">
        {props.productData.map((item) => {
          return (
            <div className="all-products mt-4">
              <div className="left-img">
                <img src={item.image} alt="" />
              </div>
              <div className="right-content">
                <p>
                  <a href="#">{item.title}</a>
                </p>
                <p>
                  <a href="#">${item.price}</a>
                </p>
              </div>
            </div>
          );
        })}
      </marquee>
    </>
  );
};

export default SidePannel;
