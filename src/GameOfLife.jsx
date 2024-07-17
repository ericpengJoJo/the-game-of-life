import React, { useEffect } from 'react';
import './App.scss';
import useSound from 'use-sound';

import { useGameContext } from './context';
import GameDisplay from './components/GameDisplay';
import GameControl from './components/GameControl';
import LifeFormRader from './components/LifeFormRader';
import CaptureBoard from './components/CaptureBoard';
import DescriptionBox from './components/DescriptionBox';
import backgroundMusic from './sounds/mainBackgroundMusic.mp3'

function GameOfLife ({
    numRows,
    numCols
}){
    const { dispatch } = useGameContext()

    const [playBGM, { stop }] = useSound(
        backgroundMusic,
        { volume: 0.5, loop: true }
      )
    
      useEffect(()=>{
        playBGM()
    
        return () => {
          stop()
        }
    
      }, [playBGM, stop])

    useEffect(() => {
        dispatch({ type: 'generateEmptyGameBoard', payload: { rows: numRows, cols: numCols }})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <header className="gameheader">
                <h1>Conway's Game of Life</h1>
            </header>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div>
                    <GameDisplay numCols={numCols} />
                    <DescriptionBox />
                    <GameControl numRows={numRows} numCols={numCols} />
                </div>
                <div style={{
                    width: numCols * 6,
                    height: (20 * numRows) + 210,
                }}>
                    <LifeFormRader />
                    <CaptureBoard />
                </div>
            </div>
        </>
    );
}

export default GameOfLife