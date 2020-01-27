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
    //pass on click to scoreboard

    //Direction state will trigger
    direction: instructions[0],
    //This will be changed by the arrayShuffle once I get the images showing.
    plantsArray: plants,
    //This will be given to the Gameboard component, it will show the user the name of the plant they clicked on most recently.
    justClicked: "",
    //this will hold an array of the id's of the cards that have been clicked
    clicked: [],
    //This will increase each time until the user double clicks, then reset to 0
    currentScore: 0,
    // if current score >= high score, replaces high score
    highScore: 0,
    outcome: "w"
  };

  handleClick = (id, name) => {
    // this is triggered in the card component. How doe s
    const clickedArray = [...this.state.clicked];
    let score = this.state.currentScore;
    let currentHighScore = this.state.highScore;
    if (currentHighScore <= score) {
      currentHighScore = score;
    }
    if (clickedArray.includes(id)) {
      this.setState({
        direction: instructions[2],
        highScore: currentHighScore,
        currentScore: 0,
        clicked: [],
        justClicked: name,
        plantsArray: this.arrayShuffle(),
        outcome: "l"
      });
    } else {
      score++;
      clickedArray.push(id);

      this.setState({
        direction: instructions[1],
        currentScore: score,
        clicked: clickedArray,
        justClicked: name,
        plantsArray: this.arrayShuffle(),
        outcome: "w"
      });
    }

    // on click, needs to check  this.state.clicked to see if the id is already in the array of clicked objects.
    // if the object has already been clicked:
    //game over - current score is reset to zero
    //set directions to instructions[2]
    // else increase current score +1
    //if currentscore >= highscore, set high score
    //set just clicked which sends the name of the plant they just clicked to the gameboard component.
    // then triggers arrayShuffle(this.state.plantsArray)
    // updates the plantsArray state to arrayshuffle.
  };

  arrayShuffle() {
    // Takes in the array of plants from the json
    //Durstenfeld Shuffle
    let tempArray = [...plants];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray;
  }

  // this is what rerenders when react senses a change.
  render() {
    console.log(this.state.currentScore);
    return (
      <div className="container">
        <div className="row">
          <Gameboard
            outcome={this.state.outcome}
            justClicked={this.state.justClicked}
            plantsArray={this.state.plantsArray}
            handleClick={this.handleClick}
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
