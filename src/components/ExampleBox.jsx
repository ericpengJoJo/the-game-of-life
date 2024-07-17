import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { useGameContext } from '../context';
import ContainerWrapper from './ContainerWrapper';
import { lifeFormMaps, noMoreHint } from '../instance';
import hintClickSound from '../sounds/hintClick.mp3'
import {
    upperCaseFirstLetter
} from '../utils/helpers';

function ExampleBox () {
    const {
        state,
    } = useGameContext()

    const initialHint = [{
        pattern: noMoreHint
    }, {
        pattern: noMoreHint
    }, {
        pattern: noMoreHint
    }]
    const [hintIdx, setHintIdx] = useState(0)
    const [hintDetails, setHintDetails] = useState(initialHint)
    const { user } = state;
    const [hintClick] = useSound(hintClickSound);

    async function generateExamples () {
        return lifeFormMaps.reduce((acc, cur) => {
            const capturedNum = user.lifeFormList.length;
            if (user.lifeFormList.includes(cur.name)) {
                return acc;
            }

            if (capturedNum < 3 && cur.difficulty.includes('normal')) {
                return acc;
            } else if (capturedNum < 6 && cur.difficulty.includes('hard')) {
                return acc;
            }
            const obj = {}
            obj.name = cur.name;
            obj.difficulty = cur.difficulty;
            const trackPattern = cur.shapes[0].pattern.slice();
            const outerArr = []

            for(let i = -1;i < 5;i += 1){
                const innerArr = []
                for(let j = -1;j < 5;j += 1) {
                    const checkGrid =  trackPattern[0]
                    let value = 0;
                    if(trackPattern.length > 0
                        && checkGrid.x === j
                        && checkGrid.y === i
                    ) {
                        value = 1
                        trackPattern.shift()
                    }
                    innerArr.push(value)
                }
                outerArr.push(innerArr)
            }
            obj.pattern = outerArr;
            acc.push(obj)
            return acc;
        },[])
    }

    function showCurrentDifficulty () {
        const capturedNum = user.lifeFormList.length;
        const color = {
            easy: '#03A9F4',
            normal: '#92CD41',
            hard: '#E76E55'
        }
        if (capturedNum < 3) {
            return {
                text: 'easy',
                diffColor: color.easy
            };
        } else if (capturedNum < 6 ) {
            return {
                text: 'normal',
                diffColor: color.normal
            };
        }
        return {
            text: 'hard',
            diffColor: color.hard
        }
    }

    function handleClick () {
        hintClick()
        if (hintIdx + 1 > hintDetails.length - 1){
            return setHintIdx(0);
        }
        return setHintIdx(prev => prev + 1);
    }

    useEffect(() => {
        async function fetchHints () {
            const details = await generateExamples()
            setHintDetails(details)
        } 
        fetchHints()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.lifeFormSpoted])
    const { text, diffColor } = showCurrentDifficulty()

    return (
        <div
            style={{
                marginLeft: 50
            }}
        >
            <ContainerWrapper
                width={240}
                height={300}
            >
                <div
                    onClick={() => handleClick()}
                    className='hover-button'
                >
                    <div className='hint-font'>HINT!</div>
                    <div
                        className='diff-container'
                        style={{
                            backgroundColor: `${diffColor}`
                        }}
                    >
                        <div className='difficulty-font'>{upperCaseFirstLetter(text)}</div>
                    </div>
                    <div
                    style={{
                        width: (25 * 6) + 2,
                        height: (25 * 6) + 14,
                        backgroundColor: '#03A9F4',
                        border: '4px solid black',
                        borderRadius: 5
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${6}, 25px)`,
                    }}>
                        {hintDetails.length > 0 ? hintDetails[hintIdx]?.pattern.map((rows, i) =>
                            rows.map((col, j) => (
                                <div
                                    key={`expample-${i}-${j}`}
                                    className={`rader-pixel-dot ${hintDetails[hintIdx].pattern[i][j] ? 'pixel-white' : ''}`}                    
                                />
                            ))
                        ) : <div>Loading...</div>}
                    </div>
                    
                </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default ExampleBox;