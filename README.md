# Memory Game

https://md0808.github.io/clicky-game/

Click on a plant. Try to remember each one you've picked. You lose the round when you pick the same plant twice. You get a point for each time you click a unique card.

## Technologies Used:

- React.js
- Create-React-App
- Bootstrap
- CSS
- Animate.css
- HTML
- Node.js
- npm

<img width="1417" alt="Screen Shot 2020-01-26 at 8 01 28 PM" src="https://user-images.githubusercontent.com/51139840/73148187-90598980-4080-11ea-9148-0cb5fb6b14d0.png">

## Problem

The application should render different images to the screen. Each image should listen for click events, keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game should restart.

## Solution

Using the React.js library, this application is composed of four components: Container, Gameboard, Scoreboard, and Card. The Container componenent is the highest level, holds the state object, and hands props to Gameboard and Scoreboard. Gameboard hands props to Card. Each plant's photo, name and id are drilled to the the the Card Component and rendered within the Gameboard.
Every time a user clicks a plant, onClick event handler is triggered in the Card component, which is executed in the Container. Inside the handler function, the state is updated to reflect the changes after each click. The application checks to see if the image has already been clicked. If it has, the current score is reset, signaling a new game. If it has not been clicked, the scoreboard is updated, and the game continues. Another function is called to re-shuffle the images that appear using the Durstenfeld Shuffle.
