import React, { useEffect } from 'react';
import './App.scss';

import { useGameContext } from './context';
import GameDisplay from './components/GameDisplay';
import GameControl from './components/GameControl';
import LifeFormRader from './components/LifeFormRader';
import CaptureBoard from './components/CaptureBoard';

function GameOfLife ({
    numRows,
    numCols
}){
    const { dispatch } = useGameContext()

    useEffect(() => {
        dispatch({ type: 'generateEmptyGameBoard', payload: { rows: numRows, cols: numCols }})
    }, [])
    return (
        <>
            <div style={{
                display: 'flex'
            }}>
                <div>
                    <GameDisplay numCols={numCols} />
                    <GameControl numRows={numRows} numCols={numCols} />
                </div>
                <div style={{
                    width: numCols * 6,
                    height: (20 * numRows) + 210,
                    backgroundColor: 'pink',
                    border: 'solid 1px black',
                }}>
                    <LifeFormRader />
                    <CaptureBoard />
                </div>
            </div>
        </>
    );
}

export default GameOfLife