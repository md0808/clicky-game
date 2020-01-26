import React from "react";
import "./style.css";

//This component will take in props, filling in with info from the plant-list.json
//This component holds an onClick even which triggers a function
function Card(props) {
  return (
    <div className="col-lg-3 img-holder">
      <img
        className="plant-image img-fluid mb-3"
        src={props.img}
        alt={props.name}
        key={props.id}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
}
export default Card;
