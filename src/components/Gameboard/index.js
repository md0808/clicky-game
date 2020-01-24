import React from "react";
import Card from "../Card/index";
import "./style.css";

//map each item in the randomized array onto a card that will be placed

function Gameboard(props) {
  return (
    <div className="col-sm-8 mt-5 gameboard">
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <h2 className="mt-5 mx-auto text-center">
            <span>You clicked</span>
            <span>{props.justClicked}</span>
          </h2>
          <div className="plant-cards">{props.plantArray}</div>
        </div>
      </div>
    </div>
  );
}

export default Gameboard;
