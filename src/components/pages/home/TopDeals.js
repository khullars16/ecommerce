import React from "react";
// import { UserConsumer } from "../../../userContext";

const TopDeals = (props) => {
  return (
    <section className="top-deals">
      
{/* <UserConsumer>
  {
    (username) => {
    return <h1>{username}</h1>
    }
  }
</UserConsumer> */}


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
