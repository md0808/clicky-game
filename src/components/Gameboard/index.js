import React from "react";
import Card from "../Card/index";
import "./style.css";

function Gameboard(props) {
  return (
    <div className="col-sm-8 mt-5 gameboard">
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <h2 className="mt-2 mx-auto text-center">
            <span>You clicked: </span>
            <p className="plant-name"> {props.justClicked}</p>
          </h2>
          <div className="row m-2 mb-3">
            {props.plantsArray.map(plant => (
              <Card
                id={plant.id}
                key={plant.id}
                name={plant.name}
                img={plant.image}
                handleClick={props.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameboard;
