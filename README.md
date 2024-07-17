# Conway's Game of Life

## Table of Contents

- [About](#-about)
- [How to Build](#-how-to-build)
- [Features](#-features)
- [Roadmap](#-roadmap)
- [Project Journey](#-project-journey)
- [License](#-license)
- [Contacts](#%EF%B8%8F-contacts)

## 🚀 About

**Conway's Game of Life** is a fascinating example of a cellular automaton devised by British mathematician John Horton Conway in 1970. Despite its simplicity, it exhibits complex and often unexpected behaviors, making it a subject of interest in various fields such as mathematics, computer science, and artificial life.

![Game of Life Ecosystem](./src/img/game-of-life-eco.png)

Imagine each grid square you see above represents a cell. The dark green square is a living cell, and the light green square is a dead cell. Each cell interacts with its surrounding environment (the 8 neighboring cells around it), and the following rules determine the state of each cell in the next generation:

- A dead cell will be overjoyed and jump out of the graveyard when it is surrounded by 3 living neighbors (turns into a living cell).
- A living cell dances with 2 or 3 living neighbors in perfect harmony, no more and no less, just the right amount of neighbors.
- Unfortunately, all living cells are introverts and will die if they are surrounded by more than 3 living neighbors.
- A living cell can also die when it has fewer than 2 living neighbors; it's too awkward to be with just one living cell...

What makes **Conway's Game of Life** fascinating is that you can create something mesmerizing by applying these rules to every cell simultaneously. Originally, there is no winning or losing in this game. You can create and kill a cell by clicking on the squares on the board and simply observe the infinite possibilities of cellular automation. Try to discover various stable patterns within the grid.

For my project, I want to pay respect to John Horton Conway's work and also provide users familiar with **Conway's Game of Life** a new experience. My biggest inspiration is Pokemon Snap (a video game from Nintendo 64 in 1999) and the Pokedex from the Pokemon video game franchise. In Pokemon Snap, players are on a non-stop vehicle, and their main goal is to take pictures of Pokemon that only appear on the screen for a limited amount of time. Players can earn more points if they take a good picture. The Pokedex allows players to keep track of the Pokemon they've seen and caught in the game.

In my game, there are a total of 9 available life-form-mons for you to capture. I will go into more detail in the Features section. I hope you enjoy the experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎨 How to Build

1. Clone the repo
   ```sh
   git clone https://github.com/ericpengJoJo/the-game-of-life.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm start
   ```
4. Run the tests
   ```sh
   npm test
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🕹️ Features

- Toggle between alive and dead cells by clicking on the grid table when it's not running.
- Living cells generate automatically according to the Game of Life rules when you click the **Start Game** button.
- Pause the game and snap a picture of the life-form-mon by clicking the **Pause Game** button.
- Randomize and generate living cells on the grid table by clicking the **Randomize button**.
- Reset the game to its initial state by clicking the **Reset** button.
- Click on the **Hint** box to learn what available life-form-mons can be created.
- Unlock more life-form-mon data in the **Hint** box and unlock difficulty by capturing more life-form-mons.
- Observe your captured life-form-mons' animations in the life-formdex.
- List your captured life-form-mons and your score.
- Display a win game animation after capturing all available life-form-mons.

![Game of Life Main Page](./src/img/life-form-mon-main-page.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌱 Project Journey

### Day 1
