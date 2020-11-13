import React from "react";

const TopDeals = (props) => {
  return (
    <section className="top-deals">
      
      {props.deals.map((items) => {
        return (
          <div className="deals-card">
            <img src={`/assets/images/${items}.png`} alt="img" />
          </div>
        );
      })}
    </section>
  );
};

export default TopDeals;
