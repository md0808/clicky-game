import React from "react";
import "./style.css";

//This component will take in props, filling in with info from the plant-list.json
//This component holds an onClick even which triggers a function
function Card(props) {
  let imgClasses;
  if (props.outcome === "l") {
    imgClasses = "plant-image img-fluid animated bounce";
  } else {
    imgClasses = "plant-image img-fluid animated pulse";
  }
  return (
    <div className="col-lg-3 img-holder mb-3 animated">
      <img
        className={imgClasses}
        src={props.img}
        alt={props.name}
        key={props.id}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
}
export default Card;
