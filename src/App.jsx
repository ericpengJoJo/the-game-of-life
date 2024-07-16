import React, { useEffect } from 'react';

import GameOfLife from './GameOfLife';
import CenteredContainer from './components/CenterContainer';
import { useGameContext } from './context';
import WinAnimation from './components/winAnimation';
import './App.scss';

function App() {
  const { state, dispatch } = useGameContext()

  useEffect(()=>{
    const isAllCaptured = Object.values(state.lifeFormSpoted).every(value => value === true);
    if (isAllCaptured) {
      dispatch({ type: 'setWin' })
    }

  }, [state.lifeFormSpoted])
  return (
    <div>
      {
        
        <CenteredContainer>
          {
            state.hasWin ?
            <WinAnimation /> :
            <div className="App">
              <GameOfLife numRows={25} numCols={50} />
            </div> 
          }
        </CenteredContainer>
      }
    </div>
  );
}

export default App;
