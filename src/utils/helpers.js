import produce from 'immer';
import {
    lifeFormPosition,
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

export function verifyLifeForm (gridState, lifeFormSpotedState){
    const spotLifeForm = {
        ...lifeFormSpotedState
    }
    if(!lifeFormSpotedState.block) {
        if(isBlockForm(gridState)) {
            spotLifeForm.block = true
        }
    }

    if(!lifeFormSpotedState.blinker) {
        if(isBlinkerForm(gridState)) {
            spotLifeForm.blinker = true
        }
    }

    return spotLifeForm
}

//////////////////////////////////////////////////////////////////////////Capture Life Form function/////////////////////////////////////////////////////////////////
function locatedLifeForm (rowIdx, colIdx, formWide, formHeight, rowEndIdx, colEndIdx) {
    const wideSize = formWide - 1;
    const heightlength = formHeight - 1;

    if([rowIdx, colIdx].every(idx => idx === 0)) {
        return lifeFormPosition.topLeft;
    }

    if(rowIdx === 0 && colIdx === (colEndIdx - wideSize)) {
        return lifeFormPosition.topRight;
    }

    if(rowIdx === 0) {
        return lifeFormPosition.top;
    }

    if(rowIdx === (rowEndIdx - heightlength) && colIdx === 0) {
        return lifeFormPosition.bottomLeft;
    }

    if(rowIdx === (rowEndIdx - heightlength) && colIdx === (colEndIdx - wideSize)) {
        return lifeFormPosition.bottomRight;
    }

    if(rowIdx === (rowEndIdx - heightlength)) {
        return lifeFormPosition.bottom;
    }

    if(colIdx === (colEndIdx - wideSize)) {
        return lifeFormPosition.right;
    }

    if(colIdx === 0) {
        return lifeFormPosition.left;
    }
    return lifeFormPosition.center;
}

function verifyFormWhiteSpace (grids, rowIdx, colIdx, width, height, position) {
    const whiteSpaces = [];
    const positionArr = Object.values(lifeFormPosition)

    function hasWhiteSpaces (noSpaceAreas, locatedArea) {
        const filterArr = positionArr.filter(str => !noSpaceAreas.some(keyword => str.toLowerCase().includes(keyword)));
        return filterArr.some(spot => spot === locatedArea)
    }

    // top left corner [0] -> 
    if(hasWhiteSpaces(['top', 'left'], position)) {
        // console.log('run top left corner space')
        whiteSpaces.push(grids[rowIdx - 1][colIdx - 1]);
    }
    // top right corner [0] -> 
    if(hasWhiteSpaces(['top', 'right'], position)) {
        // console.log('run top right corner space')
        whiteSpaces.push(grids[rowIdx - 1][colIdx + width]);
    }
    // bottom left corner [0] ->
    if(hasWhiteSpaces(['bottom', 'left'], position)) {
        // console.log('run bottom left corner space')
        whiteSpaces.push(grids[rowIdx + height][colIdx - 1]);
    }
    // bottom right corner [0] ->
    if(hasWhiteSpaces(['bottom', 'right'], position)) {
        // console.log('run bottom right corner space')
        whiteSpaces.push(grids[rowIdx + height][colIdx + width]);
    }
    // top spaces
    if(hasWhiteSpaces(['top'], position)) {
        // console.log('run top Corner spaces')
        const topRow = grids[rowIdx - 1]
        for(let i = colIdx;i < colIdx + width;i += 1) {
            whiteSpaces.push(topRow[i]);
        }
    }
    // bottom spaces
    if(hasWhiteSpaces(['bottom'], position)) {
        // console.log('run bottom Corner spaces')
        const bottomRow = grids[rowIdx + height];
        for(let i = colIdx;i < colIdx + width;i += 1) {
            whiteSpaces.push(bottomRow[i]);
        }
    }
    // left corner spaces
    if(hasWhiteSpaces(['left'], position)) {
        // console.log('run left corner spaces')
        for(let i = rowIdx;i < rowIdx + height;i += 1){
            whiteSpaces.push(grids[i][colIdx - 1]);
        }
    }
    // right corner spaces
    if(hasWhiteSpaces(['right'], position)) {
        // console.log('run right corner spaces')
        for(let i = rowIdx;i < rowIdx + height;i += 1){
            whiteSpaces.push(grids[i][colIdx + width]);
        }
    }
    // console.log('result array of ', position, ' : ', whiteSpaces, ' whitespace length: ', whiteSpaces.length)
    return whiteSpaces.every(num => num === 0);
}

export function isBlockForm (grids){
    const rowEnd = grids.length - 1
    const colEnd = grids[0].length - 1
    const width = 2;
    const height = 2
    console.log('isBlockForm run!!! :', {rowEnd}, {colEnd})

    // find the black block first
    for(let i = 0;i < grids.length - 1;i += 1) {
        const row = grids[i]
        for(let j = 0;j < row.length - 1; j += 1){
            if([grids[i][j], grids[i][j + 1], grids[i + 1][j], grids[i + 1][j + 1]].every(num => num === 1)) {
                console.log('Find Squire!!!', [i, j])
                const position = locatedLifeForm(i, j, width, height, rowEnd, colEnd);
                console.log({position})
                console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, width, height, position))
                // return boolean once find the first life Form
                if (verifyFormWhiteSpace(grids, i, j, width, height, position)) return true
            }
        }
    }

    return false
}

export function isBlinkerForm (grids){
    const rowEnd = grids.length - 1
    const colEnd = grids[0].length - 1
    console.log('isBlinkerForm run!!! :', {rowEnd}, {colEnd})

    // find the black block first
    for(let i = 0;i < grids.length - 1;i += 1) {
        const row = grids[i]
        for(let j = 0;j < row.length - 1; j += 1){
            // stand up
            if([grids[i][j], grids[i + 1][j], grids[i + 2][j]].every(num => num === 1)) {
                console.log('Find Blinker stand!!!', [i, j])
                const position = locatedLifeForm(i, j, 1, 3, rowEnd, colEnd);
                console.log({position})
                console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 1, 3, position))
                // return boolean once find the first life Form
                if (verifyFormWhiteSpace(grids, i, j, 1, 3, position)) return true
            }

            // lie down
            if([grids[i][j], grids[i][j + 1], grids[i][j + 2]].every(num => num === 1)) {
                console.log('Find Blinker lie down!!!', [i, j])
                const position = locatedLifeForm(i, j, 3, 1, rowEnd, colEnd);
                console.log({position})
                console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 3, 1, position))
                // return boolean once find the first life Form
                if (verifyFormWhiteSpace(grids, i, j, 3, 1, position)) return true
            }
        }
    }

    return false
}