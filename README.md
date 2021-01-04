![](https://img.shields.io/badge/Microverse-blueviolet)

# The Air-Guard Game

> A multi-scene turn-based Role-Playing-Game that runs in a browser

![screenshot](./app_screenshot.png)

This is a game that engages the player as a guard who shoots down planes in thier airspace with missiles while dodging
dropped bombs.

## Built With

- HTML5,
- CSS3,
- Javascript
- Webpack
- Phaser

## Live Demo

[Live Demo Link](https://pbkabali.github.io/The-Air-Guard-Game/)

## Getting Started

To get a local copy up and running in development mode, follow these simple steps.

### Prerequisites

- Node.js
- Browser
- Terminal

### Setup

Clone the project from [here](https://github.com/pbkabali/The-Air-Guard-Game/tree/air-guard-game)

### Install

Run `npm install` to get all the dependencies.

Run `npm run build` for one time build of bundle after changes.

Run `npm run watch` to run webpack build in watch mode.

Run `npm start` to start the web-server.

### Usage

Go to `https://localhost:8080` in your browser.

### Run tests

Run `npm test` from the project root directory.

## Game Playing Instructions

- The game requests for the player name on satrt-up. If a name other than `Guest` is provided, the player score will be included in the leaderboard rankings when the game is over. If a name is not provided, the player will be named `Guest` by default.
- Click the `start game` button to enter the main game-play scene.
- Use the left and right arrow-keys to move the player horizontally.
- Use the space-key to shoot missiles towards the enemy planes.
- Watch out for random bombs that come from the enemy planes.
- Accumulate points to get the maximum possible score by shooting as many planes as possible.
- Note that the player's shooting rounds can run out and sometime is needed to reload.
- The game ends when the player is hit by a bomb.

## Authors

👤 **Paul Balitema Kabali**

- Github: [@pbkabali](https://github.com/pbkabali)
- Twitter: [@pbkabali](https://twitter.com/pbkabali)
- Linkedin: [engineerbpk](https://linkedin.com/in/engineerbpk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/pbkabali/The-Air-Guard-Game/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse Team 140 (The Cupids)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
