import React from "react";

//This component will take in props, filling in with info from the plant-list.json
//This component holds an onClick even which triggers a function
function Card(props) {
  return (
    <div className="card col-lg-3 m-3 img-holder">
      <img
        src={props.img}
        alt={props.name}
        key={props.id}
        onClick={() => props.handleClick}
      />
    </div>
  );
}
export default Card;
