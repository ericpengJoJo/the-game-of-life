import produce from 'immer';
import {
    lifeFormPosition,
    findMyNeighbors,
    lifeFormMaps,
    transitionAnimations,
    searchingRaderAnimation
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

    let searchLifeForm = null;

    for(let i = 0;i < gridState.length - 1;i += 1) {
        const row = gridState[i]
        for(let j = 0;j < row.length - 1; j += 1){
            searchLifeForm = {
                grids: gridState,
                type: 'blockmon',
                currentX: j,
                currentY: i
            }

            if(!lifeFormSpotedState.blockmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'blockmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    spotLifeForm.blockmon = true
                }
            }

            if(!lifeFormSpotedState.blinkermon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'blinkermon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    spotLifeForm.blinkermon = true
                }
            }

            if(!lifeFormSpotedState.beehivemon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'beehivemon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    spotLifeForm.beehivemon = true
                }
            }

            if(!lifeFormSpotedState.loafmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'loafmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    spotLifeForm.loafmon = true
                }
            }

            if(!lifeFormSpotedState.toadmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'toadmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    spotLifeForm.toadmon = true
                }
            }



        }
    }

    return spotLifeForm
}

//////////////////////////////////////////////////////////////////////////Capture Life Form function/////////////////////////////////////////////////////////////////
function locatedLifeForm (
    rowIdx,
    colIdx,
    formWide,
    formHeight,
    rowEndIdx,
    colEndIdx
) {
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

function verifyFormWhiteSpace (
    grids,
    rowIdx,
    colIdx,
    width,
    height,
    position
) {
    const whiteSpaces = [];
    const positionArr = Object.values(lifeFormPosition)

    function hasWhiteSpaces (noSpaceAreas, locatedArea) {
        const filterArr = positionArr.filter(str => !noSpaceAreas.some(keyword => str.toLowerCase().includes(keyword)));
        return filterArr.some(spot => spot === locatedArea)
    }

    if(hasWhiteSpaces(['top', 'left'], position)) {
        whiteSpaces.push(grids[rowIdx - 1][colIdx - 1]);
    }

    if(hasWhiteSpaces(['top', 'right'], position)) {
        whiteSpaces.push(grids[rowIdx - 1][colIdx + width]);
    }

    if(hasWhiteSpaces(['bottom', 'left'], position)) {
        whiteSpaces.push(grids[rowIdx + height][colIdx - 1]);
    }

    if(hasWhiteSpaces(['bottom', 'right'], position)) {
        whiteSpaces.push(grids[rowIdx + height][colIdx + width]);
    }

    if(hasWhiteSpaces(['top'], position)) {
        const topRow = grids[rowIdx - 1]
        for(let i = colIdx;i < colIdx + width;i += 1) {
            whiteSpaces.push(topRow[i]);
        }
    }

    if(hasWhiteSpaces(['bottom'], position)) {
        const bottomRow = grids[rowIdx + height];
        for(let i = colIdx;i < colIdx + width;i += 1) {
            whiteSpaces.push(bottomRow[i]);
        }
    }
    if(hasWhiteSpaces(['left'], position)) {
        for(let i = rowIdx;i < rowIdx + height;i += 1){
            whiteSpaces.push(grids[i][colIdx - 1]);
        }
    }

    if(hasWhiteSpaces(['right'], position)) {
        for(let i = rowIdx;i < rowIdx + height;i += 1){
            whiteSpaces.push(grids[i][colIdx + width]);
        }
    }

    return whiteSpaces.every(num => num === 0);
}

export function generateRaderAnimationArr ({ type, isLifeForm = false }) {
    const result = []
    let frameDetail
    let duplicateFrames = 1

    if (type === 'captured' && !isLifeForm) {
        const fullGrids = [];
        const emptyGrids = []
        console.log("run generateGameBoard!!")
        for(let i = 0;i < 7; i += 1){
            fullGrids.push(Array.from(Array(7), () => 1));
            emptyGrids.push(Array.from(Array(7), () => 0));
        }
        return [fullGrids, emptyGrids];
    }

    if (isLifeForm) {
        frameDetail = lifeFormMaps.filter(({name}) => name === type)[0];
    }
    if (!isLifeForm && type === 'transition') {
        frameDetail = transitionAnimations
    }

    if (!isLifeForm && type === 'searching') {
        frameDetail = searchingRaderAnimation
    }
    const { animation, color, name } = frameDetail;
    
    if(type === 'blockmon' || type === 'beehivemon' || type === 'loafmon'){
        duplicateFrames = 4
    } else if (type === 'blinkermon' || type === 'toadmon') {
        duplicateFrames = 2
    }
    let count = 0
    while(count < duplicateFrames) {
        for(const animationDetail of animation) {
            const { pattern } = animationDetail;
                const trackPattern = pattern.slice();
    
                const outerArr = []
                for(let i = 0;i < animationDetail.height;i += 1){
                    const innerArr = []
                    for(let j = 0;j < animationDetail.width;j += 1) {
                        const checkGrid =  trackPattern[0]
                        let gridDetail = {
                            name,
                            color: '',
                            value: 0
                        }
                        if(trackPattern.length > 0
                            && checkGrid.x === j
                            && checkGrid.y === i
                        ) {
                            gridDetail = {
                                ...gridDetail,
                                color,
                                value: 1
                            }
                            trackPattern.shift()
                        }
                        innerArr.push(gridDetail)
                    }
                    outerArr.push(innerArr)
                }
                result.push(outerArr)
        }
        count += 1
    }

    return result;
};
/**
 * 
 * [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,o],
]
    7,7
[5,2]
 */
function verifyLifeFormPattern ({ grids, type, currentX, currentY }) {
    const { shapes } = lifeFormMaps.filter(({name}) => name === type)[0];
    const rowEnd = grids.length - 1
    const colEnd = grids[0].length - 1
    for(const shape of shapes) {
        const fillGrids = [];
        const emptyGrids = [];
        const patterns = shape.pattern.slice();
        if((currentX + shape.width - 1 <= colEnd) && (currentY + shape.height - 1 <= rowEnd)) {
            for(let i = 0;i < shape.height;i += 1) {
                for(let j = 0;j < shape.width;j += 1){
                    if(patterns.length > 0 && patterns[0].x === j && patterns[0].y === i) {
                        fillGrids.push(grids[currentY + i][currentX + j])
                        patterns.shift()
                    } else {
                        emptyGrids.push(grids[currentY + i][currentX + j])
                    }
                }
            }

            if(fillGrids.every(num => num === 1)) {
                if(emptyGrids.length === 0 || emptyGrids.every(num => num === 0)) {
                    const position = locatedLifeForm(currentY, currentX, shape.width, shape.height, rowEnd, colEnd);
    
                    if (verifyFormWhiteSpace(grids, currentY, currentX, shape.width, shape.height, position)) return true
                }
            }
        }
    }

    return false;
}

export function isBlockForm (grids){

    for(let i = 0;i < grids.length - 1;i += 1) {
        const row = grids[i]
        for(let j = 0;j < row.length - 1; j += 1){
            const searchLifeForm = {
                grids,
                type: 'blockmon',
                currentX: j,
                currentY: i
            }
            if(verifyLifeFormPattern(searchLifeForm)) return true
            // if([grids[i][j], grids[i][j + 1], grids[i + 1][j], grids[i + 1][j + 1]].every(num => num === 1)) {
            //     console.log('Find Squire!!!', [i, j])
            //     verifyLifeFormPattern({
            //         grids,
            //         type: 'blockmon',
            //         currentX: j,
            //         currentY: i
            //     })
            //     const position = locatedLifeForm(i, j, width, height, rowEnd, colEnd);

            //     if (verifyFormWhiteSpace(grids, i, j, width, height, position)) return true
            // }
        }
    }

    return false
}

// export function isBlinkerForm (grids){
//     const rowEnd = grids.length - 1
//     const colEnd = grids[0].length - 1
//     console.log('isBlinkerForm run!!! :', {rowEnd}, {colEnd})

//     // find the black block first
//     for(let i = 0;i < grids.length - 1;i += 1) {
//         const row = grids[i]
//         for(let j = 0;j < row.length - 1; j += 1){
//             // stand up
//             if([grids[i][j], grids[i + 1][j], grids[i + 2][j]].every(num => num === 1)) {
//                 console.log('Find Blinker stand!!!', [i, j])
//                 const position = locatedLifeForm(i, j, 1, 3, rowEnd, colEnd);
//                 console.log({position})
//                 console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 1, 3, position))
//                 // return boolean once find the first life Form
//                 if (verifyFormWhiteSpace(grids, i, j, 1, 3, position)) return true
//             }

//             // lie down
//             if([grids[i][j], grids[i][j + 1], grids[i][j + 2]].every(num => num === 1)) {
//                 console.log('Find Blinker lie down!!!', [i, j])
//                 const position = locatedLifeForm(i, j, 3, 1, rowEnd, colEnd);
//                 console.log({position})
//                 // console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 3, 1, position))
//                 // return boolean once find the first life Form
//                 if (verifyFormWhiteSpace(grids, i, j, 3, 1, position)) return true
//             }
//         }
//     }

//     return false
// }

// store 
// 
/**
 * // 0 1 0
//    1 0 1
//    1 0 1
//    0 1 0
 * beehive: {
 * x1y0, x0y1, x2y1, x0y2, x2y2, x1y3
 * x-0, x-2
 * x-
 * }
 * 
 */

// export function isBeehiveForm (grids){
//     const rowEnd = grids.length - 1
//     const colEnd = grids[0].length - 1
//     console.log('isBeehiveForm run!!! :', {rowEnd}, {colEnd})

//     // find the black block first
//     for(let i = 0;i < grids.length - 1;i += 1) {
//         const row = grids[i]
//         for(let j = 0;j < row.length - 1; j += 1){
//             // stand up
//             0 1 0
//             1 0 1
//             1 0 1
//             0 1 0
//             if([grids[i][j + 1], grids[i + 1][j], grids[i + 1][j + 2], grids[i + 2][j], grids[i + 2][j + 2], grids[i + 3][j + 1]].every(num => num === 1)) {
//                 if([grids[i][j], grids[i][j + 2], grids[i + 1][j + 1], grids[i + 2][j + 1], grids[i + 3][j], grids[i + 3][j + 2]].every(num => num === 0)) {
//                     console.log('Find Beehive stand!!!', [i, j])
//                     const position = locatedLifeForm(i, j, 3, 4, rowEnd, colEnd);
//                     console.log({position})
//                     console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 3, 4, position))
//                     // return boolean once find the first life Form
//                     if (verifyFormWhiteSpace(grids, i, j, 3, 4, position)) return true
//                 }
//             }

//             // lie down
//             // 0 1 1 0
//             // 1 0 0 1
//             // 0 1 1 0
//             if([grids[i][j + 1], grids[i][j + 2], grids[i + 1][j], grids[i + 1][j + 3], grids[i + 2][j + 1], grids[i + 2][j + 2]].every(num => num === 1)) {
//                 if([grids[i][j], grids[i][j + 3], grids[i + 1][j + 1], grids[i + 1][j + 2], grids[i + 2][j], grids[i + 2][j + 3]].every(num => num === 0)) {
//                     console.log('Find Beehive lie down!!!', [i, j])
//                     const position = locatedLifeForm(i, j, 4, 3, rowEnd, colEnd);
//                     console.log({position})
//                     // console.log('verfiy white space result ===>', verifyFormWhiteSpace(grids, i, j, 3, 1, position))
//                     // return boolean once find the first life Form
//                     if (verifyFormWhiteSpace(grids, i, j, 4, 3, position)) return true
//                 }
//             }
//         }
//     }

//     return false
// }