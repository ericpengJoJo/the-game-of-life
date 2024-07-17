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
    let countScore = 0
    const newCaptureLifeForm = []
    let searchLifeForm = null;
    let lifeFormMap = null;

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
                    if(!spotLifeForm.blockmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'blockmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.blockmon = true
                }
            }

            if(!lifeFormSpotedState.blinkermon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'blinkermon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.blinkermon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'blinkermon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.blinkermon = true
                }
            }

            if(!lifeFormSpotedState.beehivemon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'beehivemon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.beehivemon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'beehivemon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.beehivemon = true
                }
            }

            if(!lifeFormSpotedState.loafmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'loafmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.loafmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'loafmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.loafmon = true
                }
            }

            if(!lifeFormSpotedState.toadmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'toadmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.toadmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'toadmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.toadmon = true
                }
            }

            if(!lifeFormSpotedState.beaconmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'beaconmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.beaconmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'beaconmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.beaconmon = true
                }
            }

            if(!lifeFormSpotedState.glidermon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'glidermon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.glidermon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'glidermon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.glidermon = true
                }
            }

            if(!lifeFormSpotedState.boatmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'boatmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.boatmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'boatmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.boatmon = true
                }
            }

            if(!lifeFormSpotedState.tubmon) {
                searchLifeForm = {
                    ...searchLifeForm,
                    type: 'tubmon',
                }
                if(verifyLifeFormPattern(searchLifeForm)) {
                    if(!spotLifeForm.tubmon) {
                        lifeFormMap = lifeFormMaps.filter(({name}) => name === 'tubmon')[0]
                        countScore += lifeFormMap.points;
                        newCaptureLifeForm.push(lifeFormMap.name)
                    }
                    spotLifeForm.tubmon = true
                }
            }
        }
    }

    return {
        spotLifeForm,
        newScore: countScore,
        newCaptureList: newCaptureLifeForm
    }
}

//////////////////////////////////////////////////////////////////////////Capture Life Form function/////////////////////////////////////////////////////////////////
export function locatedLifeForm (
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

export function verifyLifeFormSurroundWhiteSpace (
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
    let frameDetail;
    let duplicateFrames = 1

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
    
    if(type === 'blockmon' || type === 'beehivemon' || type === 'loafmon' || type === 'boatmon' || type === 'tubmon'){
        duplicateFrames = 4
    } else if (type === 'blinkermon' || type === 'toadmon' || type === 'beaconmon') {
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
    
                    if (verifyLifeFormSurroundWhiteSpace(grids, currentY, currentX, shape.width, shape.height, position)) return true
                }
            }
        }
    }

    return false;
}

//////////////////////////////////////////////////////////////////////////Global generic function/////////////////////////////////////////////////////////////////
export function upperCaseFirstLetter(string) {
    if (typeof string !== 'string') return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}