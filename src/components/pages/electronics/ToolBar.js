import React from "react";

const ToolBar = (props) => {
  return (
    <div className="toolbar-top">
      <ul>
        <li>
          <button onClick={(e) => props.rowShow(e.target.innerText)}>grid</button>
        </li>
        <li>
          <button onClick={(e) => props.rowShow(e.target.innerText)}>list</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={(e) => props.rowCount(e.target.innerText)}>2</button>
        </li>
        <li>
          <button onClick={(e) => props.rowCount(e.target.innerText)}>3</button>
        </li>
        <li>
          <button onClick={(e) => props.rowCount(e.target.innerText)}>4</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>16</button>
        </li>
        <li>
          <button>position</button>
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;
