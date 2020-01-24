import React, { Component } from "react";
import Gameboard from "../Gameboard/index";
import Scoreboard from "../Scoreboard";
import plants from "../plantList.json";
import "./style.css";

//This is where the majority of the game logic will go.
//Within the gameboard component I'll need to map the randomized array of plants into cards

//
const instructions = [
  "Click on a plant to begin the game",
  //changes to [1] once game has started. [2] when the second click occurs
  "Keep clicking!",
  "Start over!"
];

class Container extends Component {
  //this sets the initial state, when everything is loaded. On click events with trigger changes in state
  state = {
    //Direction state will trigger
    direction: instructions[0],
    //This will be changed by the arrayShuffle once I get the images showing.
    plantsArray: plants,
    //This will be given to the Gameboard component, it will show the user the name of the plant they clicked on most recently.
    justClicked: "",
    //this will hold an array of the id's of the cards that have been clicked
    clicked: [],
    //This will increase each time
    currentScore: 0,
    // if current score >= high score, replaces high score
    highScore: 0
  };

  handleClick() {
    //
  }

  arrayShuffle() {
    // Takes in the array of plants from the json
    //Durstenfeld Shuffle
    //   function shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    //takes the plants starting with the original array
    let startArray = [...plants];
    for (let i = startArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let start = startArray[i];
      start = startArray[j];
      startArray[j] = start;
    }
    return startArray;
  }

  //How do I put the Card component within the gameboard component?
  render() {
    return (
      <div className="container">
        <div className="row">
          <Gameboard
            justClicked={this.state.justClicked}
            plantsArray={this.state.plantsArray}
          />
          <Scoreboard
            direction={this.state.direction}
            highScore={this.state.highScore}
            currentScore={this.state.currentScore}
          />
        </div>
      </div>
    );
  }
}

export default Container;
