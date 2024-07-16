import React, { createContext, useContext, useReducer } from 'react';

import { defaultLifeFormSpoted } from './instance';
import {
    setGrid,
    randomizeGrids,
    generateEmptyGameBoard,
    runSimulation,
    verifyLifeForm
} from './utils/helpers';

const GameContext = createContext(null);

const initialState = {
    grid: generateEmptyGameBoard(),
    lifeFormSpoted: defaultLifeFormSpoted,
    rader: generateEmptyGameBoard(7, 7),
    user: {
        score: 0,
        lifeFormList: []
    },
    soundPlayed:[],
    hasWin: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'generateEmptyGameBoard':
            return {
                ...state,
                grid: generateEmptyGameBoard(action.payload.rows, action.payload.cols)
            }
        case 'setGrid':
            return {
                ...state,
                grid: setGrid(state.grid, action.payload.row, action.payload.col)
            }
        case 'runSimulation':
            return {
                ...state,
                grid: runSimulation(state.grid, action.payload.numRows, action.payload.numCols)
            }
        case 'reset':
            return {
                ...initialState
            };
        case 'randomizeGrids':
            return {
                ...state,
                grid: randomizeGrids(action.payload.numRows, action.payload.numCols, action.payload.percentage)
            };
        case 'verifyLifeForm':
            const { spotLifeForm, newScore, newCaptureList } = verifyLifeForm(state.grid, state.lifeFormSpoted)
            const updateScore = state.user.score + newScore

            return {
                ...state,
                lifeFormSpoted: spotLifeForm,
                user: {
                    ...state.user,
                    score: updateScore,
                    lifeFormList: [...state.user.lifeFormList, ...newCaptureList]
                }
            }
        case 'setRader':
            return {
                ...state,
                rader: action.payload
            }
        case 'setSoundPlayed':
            return {
                ...state,
                soundPlayed:[...state.soundPlayed, action.payload]
            }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <GameContext.Provider
            value={{
                state,
                dispatch,
            }}>
            {children}
        </GameContext.Provider>
    );
};

export function useGameContext (){
    const context = useContext(GameContext)
    if (context) {
        return context;
    }
}
