import produce from 'immer';
import {
    findMyNeighbors,
} from '../instance';

//////////////////////////////////////////////////////////////////////////Dispatch function/////////////////////////////////////////////////////////////////
export function generateEmptyGameBoard (rows = 25, cols = 50){
    const grids = [];
    console.log("run generateGameBoard!!")
    for(let i = 0;i < rows; i += 1){
        grids.push(Array.from(Array(cols), () => 0));
    }
    return grids;
}

export const setGrid = (gridState, row, col) => {
    const newGrid = produce(gridState,(gridCopy) => {
        gridCopy[row][col] = gridState[row][col] ? 0 : 1;
    });
    return newGrid;
}

export function randomizeGrids(numRows = 25, numCols = 50, percentage = .7){
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(
            Array.from(Array(numCols),
                () => (Math.random() > percentage ? 1 : 0))
        );
    }
    return rows
}

export function runSimulation (gridState, numRows, numCols) {
    const generateGrid = produce(gridState, (gridCopy) => {
        console.log({gridState},{gridCopy})
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                let neighbors = 0;
                findMyNeighbors.forEach(([x, y]) => {
                    const newI = i + x;
                    const newJ = j + y;
                    if (
                        newI >= 0 &&
                        newI < numRows &&
                        newJ >= 0 &&
                        newJ < numCols
                    ) {
                        neighbors += gridState[newI][newJ];
                    }
                });

                if (neighbors < 2 || neighbors > 3) {
                    gridCopy[i][j] = 0;
                } else if (gridState[i][j] === 0 && neighbors === 3) {
                    gridCopy[i][j] = 1;
                }
            }
        }
    });
    return generateGrid
}