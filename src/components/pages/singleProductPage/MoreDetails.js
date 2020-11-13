import React from "react";

const MoreDetails = (props) => {
  return (
    <>
      <div className="description-nav">
        <ul>
          <li>
            <button onClick={e => props.menuToggle(e.target.innerText)}>Details</button>
          </li>
          <li>
            <button onClick={e => props.menuToggle(e.target.innerText)}>More Information</button>
          </li>
          <li>
            <button onClick={e => props.menuToggle(e.target.innerText)}>Reviews</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoreDetails;
