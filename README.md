# Conway's Game of Life

## Table of Contents

- [About](#-about)
- [How to Use](#-how-to-use)
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

## 🎨 How to Use

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

After some researches and played arround with other developers' Game of Life project online, it remind me of my experience in biology class when I observed living cells through a microscope and how I need to record the pattern of activity from those living cells. While it was fascinating to observe, but it also can be quite boring for people that aren't into biology and cannot tell the difference on what they are looking at. For Conway's Game of Life, I think the biggest issue is that it might not be an appealing game for people that aren't developers despite it can create so many patterns of life forms through cellular automation. In order to learn more about their perspective, I decide to get some feedback from friends that aren't developers.

Originally, I feel the game might not be appealing because of lack of guideline for the new players. Many examples I saw are just one big grid table with button to play and reset. After getting feedback from my friends, my assumption is further proven right and they cannot even tell what's going on despite all the living cells are running wild on screen. How do they enjoy the game when they cannot even understand anything on screen? This is also when I got my first idea. Maybe I can change the color of stable pattern living forms during the automation, so player can tells the difference between a living cell and a life form.

<details open>
<summary>
 Snapshot Feature
</summary> <br />
After implement the basic Game of Life and gain deeper understanding of the iteration structure, I realized the execution of my first idea might not be so simple due to my lack of consideration on the potential workload of this iteration and it has to be run every second during automation. It might be possible if I just want the function to verify one or two life form every seconds, but what happen there are 15 or more life forms need to be verfiy in every seconds. I cannot even imagine the potential performance issue waiting ahead of me. For the limit amount of time I have, I need to have a feature that is more suitable in this case and at the same time, it wouldn't diverse too far from my initial vision. This is when the idea Pokemon Snap come into the picture.

When observe Game of Life automation, I realized there are many life forms that only stay alive for a short period of time before they disappear and it almost like how the player only has limit of time to take a picture of pokemon appear on the screen before they run away in Pokemon Snap. I also realized pausing the game also can be resemble if player taking a picture. This also mean I only need to run this verification function when user pause the game. They are just work so well together and I instantly approve myself on the idea.

</details>

<details open>
<summary>
 Randomize Feature
</summary> <br />
While I was breaking down on life form verification feature, I also implement randomize feature, so user can generate living cells randomly on the grid table. This idea come to me because I am someone that like to play around the game before actually reading the tutorial. If user only start the game by create couple living cells on the map and they all quickly disappear after hit **Start Game**, they definitely will felt disappointed and quit the game before they understand the essence of the game.

By helping user generate massive amount of living cells at once, user can instantly see the chemistry reactions of all the living cells as soon as they hit **Start Game**, even though user might still be confused by the visual, I believe it generate enough of appeal to have user to check out the tutorial.

</details>

<details open>
<summary>
 Life-Formdex Feature
</summary> <br />
The idea of Pokedex follow right after Pokemon Snap since I realized the players cannot even keep admiring at what they caught because whatever life form-mon they captured will disappear after they hit **Start Game** again. Even if I changed the color of the life form-mon in grids table, it will only be there temporary. What if I have whatever players captures to be store at corner like a trophy? This method not only allow players have more time admire their achievement, learn how many Life Form-mon they captured so far, they also can learn more about what their captured life forms look like without feeling like a chore. From the developer side, this way also allows us to have more freedom to play with the visual and maintain healthier performance environment by not overlapping too much tasks in one component.

Before players capture any life-form-mon, I also keep Life Formdex playing the radar detection animation in a loop. I think it's a good vitual representation for new players to instantly understand that this gameplay involve them to search for something.

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
