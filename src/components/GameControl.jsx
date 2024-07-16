import { useGameContext } from '../context';
import '../App.scss';
import useSound from 'use-sound';
import clickSound from '../sounds/click.mp3'
import eletricSound from '../sounds/eletricClick.mp3'
import pauseSound from '../sounds/pauseClick.mp3'
import resetSound from '../sounds/reset.mp3'

import React, { useState, useRef, useCallback } from 'react';;

function GameControl({
    numRows,
    numCols
}) {
    const {
        dispatch,
    } = useGameContext()

    const [running, setRunning] = useState(false);
    const runningRef = useRef(running);
    runningRef.current = running;
    const [playClick] = useSound(clickSound);
    const [pauseClick] = useSound(pauseSound);
    const [randomizeClick] = useSound(eletricSound);
    const [resetClick] = useSound(resetSound);

    function handleRandomizeGrids () {
        randomizeClick()
        dispatch({
            type: 'randomizeGrids',
            payload: {
                numRows,
                numCols,
                percentage: .7
            }
        })
    }

    const handleRunSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        dispatch({
            type: 'runSimulation',
            payload: {
                numRows,
                numCols
            }
        })

        setTimeout(handleRunSimulation, 100);
    }, [dispatch]);

    const handleVerifyLifeForm = () => {
        pauseClick()
        dispatch({
            type: 'verifyLifeForm'
        })
    }

    const handleReset = () => {
        resetClick()
        dispatch({
            type: 'reset',
        })
    }

    return (
        <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
            <div style={{
                height: 150,
                width: 20 * 50,
                backgroundColor: 'white',
                // border: 'solid 1px black',
                // borderRadius: 5,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <button
                    className='eightbit-btn'
                    onClick={() => {
                        setRunning(!running);
                        if (!running) {
                            runningRef.current = true;  
                            playClick()
                            handleRunSimulation();
                        } else {
                            handleVerifyLifeForm()
                        }
                    }}
                >
                    {running ? 'Stop Game' : 'Start Game'}
                </button>
                <button
                    className='eightbit-btn eightbit-btn--random'
                    onClick={() => handleRandomizeGrids()}>
                    Randomize
                </button>
                <button
                    className='eightbit-btn eightbit-btn--reset'
                    onClick={() => handleReset()}>
                    Reset
                </button>
            </div>
        </div>
        </>
    );
}

export default GameControl;