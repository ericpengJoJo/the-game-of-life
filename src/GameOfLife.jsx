import React, { useEffect } from 'react';
import './App.scss';

import { useGameContext } from './context';
import GameDisplay from './components/GameDisplay';
import GameControl from './components/GameControl';

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
            </div>
        </>
    );
}

export default GameOfLife