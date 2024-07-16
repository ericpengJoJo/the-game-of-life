import React from 'react';
import { GameProvider } from './context';
import GameOfLife from './GameOfLife';
import CenteredContainer from './components/CenterContainer';
import WinAnimation from './components/winAnimation';
import './App.scss';

function App() {
  return (
    <GameProvider>
      <CenteredContainer>
        <div className="App">
          <header className="gameheader">
            <h1>Conway's Game of Life</h1>
          </header>
            <GameOfLife numRows={25} numCols={50} />
        </div>
      </CenteredContainer>
    </GameProvider>
  );
}

export default App;
