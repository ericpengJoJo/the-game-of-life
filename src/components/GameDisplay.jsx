import React from 'react';

import { useGameContext } from '../context';
import '../App.scss';

function GameDisplay ({ numCols }){
    const {
        state,
        dispatch
    } = useGameContext()
    const { grid } = state;

    const handleGridClick = (row, col) => {
        dispatch({ type: 'setGrid', payload: { row, col } });
    };

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                }}>
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            key={`pixel-row-${i}-col-${j}`}
                            onClick={() => handleGridClick(i, j)}
                            className={`display-pixel-dot ${grid[i][j] ? 'pixel-black' : ''}`}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default GameDisplay