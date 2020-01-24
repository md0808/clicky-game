import React, { Component } from "react";
import "./App.css?v=2";
import icons from "./icons.json";
import Icon from "./components/Icon";

//These are the 3 possible messages that will display to the user
const gameStatus = [
  "You Lost!!",
  "Pick Your Enemy to Begin",
  "You Picked Correct!"
];
//possible menus?
const menuType = [
  "./assets/images/start.png",
  "./assets/images/correct.png",
  "./assets/images/incorrect.png"
];

//This is creating the state of the app. Used collects the id of the image clicked, to compare for later.
//
class App extends Component {
  state = {
    used: [],
    score: 0,
    //high score - how many times you've gone without double picking.
    high: 0,
    //lost has a default value of false when the user starts
    lost: false,
    //Status starts with "Pick Your Enemy to begin"
    status: gameStatus[1],
    //Starts with The image that reads "Start"
    menu: menuType[0]
  };

  // on click, it takes the name of the icon, if the name already exists in the array, runs the game over function which sets everything
  //back to zero.
  //
  handleClick = name => {
    if (this.state.used.indexOf(name) !== -1) {
      this.gameOver();
    } else {
      //temporarily used (for this round), it takes in the current USED so that it can add to it.
      let tempUsed = this.state.used;
      //pushes the name of the icon that was clicked to TempUsed.
      tempUsed.push(name);
      //Resets the State of the game each time something is clicked, if it hasn't already been clicked, it updates the "USED"
      // with the new Used array, the score gets added one, Lost remains false, status is "Picked Correct"
      this.setState({
        used: tempUsed,
        score: this.state.score + 1,
        lost: false,
        status: gameStatus[2],
        menu: menuType[1]
      });
      if (this.state.high <= this.state.score) {
        this.setState({ high: this.state.score + 1 });
      }
    }
  };

  //This is the function randomizes they array
  random() {
    //icons is imported from a json object and spread (cloned here). 16 icons
    let tempArray = [...icons];

    // i is 15, it will go through the array as long as its greater than 0. This loop goes through the array in reverse order.
    for (let i = tempArray.length - 1; i > 0; i--) {
      //j is the position of i being randomized.
      let j = Math.floor(Math.random() * (i + 1));

      //temp is the temporary position of i
      let temp = tempArray[i];
      // the index of each item in the initial array of items is replaced with the randomized index.
      tempArray[i] = tempArray[j];
      //The randomized position is changed back to
      tempArray[j] = temp;
    }
    return tempArray;
  }

  //resets the states, everything but high score
  gameOver() {
    this.setState({
      used: [],
      score: 0,
      lost: true,
      status: gameStatus[0],
      menu: menuType[2]
    });
  }
  // This is the part that React needs. Every component requires "Render", returning whatever will appear.
  render() {
    //setting the variable "randomArray" to whatever we will be giving it to, randomized.
    const randomArray = this.random();

    let imgShake = ["row game"];
    if (this.state.lost) {
      imgShake = "shake row game";
    } else {
      imgShake = "row game";
    }
    return (
      <div className="row">
        <div className="sideBar">
          <img alt="Mega Match" id="mega" src="./assets/images/MEGA.png" />
          <img alt="menu" id="menu" src={this.state.menu} />
          <div id="scorebox">
            <h1 id="score">High Score: &nbsp;&nbsp;&nbsp;{this.state.high}</h1>
            <h1 id="score">Current Score: {this.state.score}</h1>
          </div>
          <div id="bottom">
            <h3>
              To Play: Click any Robot Master, but don't click the same one
              twice!
            </h3>
            <h4>
              {" "}
              Attn: Because of the style of play in this game, playing on mobile
              isn't feasible, so I did not make it mobile responsive. Be Aware!
            </h4>
          </div>
        </div>
        <div className={imgShake}>
          {randomArray.map(icon => {
            return (
              <Icon
                key={icon.name}
                name={icon.name}
                src={icon.src}
                handleClick={this.handleClick}
              />
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

export default App;
