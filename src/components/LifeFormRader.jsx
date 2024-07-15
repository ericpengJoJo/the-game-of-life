import React, { useEffect } from 'react'

import { useGameContext } from '../context';
import ContainerWrapper from './ContainerWrapper';
import {
    generateRaderAnimationArr,
    upperCaseFirstLetter
} from '../utils/helpers';




function LifeFormRader () {
    const {
        state,
        dispatch
    } = useGameContext()

    const { lifeFormSpoted, rader } = state

    let intervalId = null;

    function raderAnimation () {
        let animatedArr = generateRaderAnimationArr({
            type: 'searching',
        });
        const lifeFormsArr = Object.entries(lifeFormSpoted).reduce((acc, cur) => {
            if(cur[1]) {
                acc.push(cur[0])
            }
            return acc
        }, [])
        console.log({lifeFormsArr})

        function runAnimation (animationArr) {
            let count = 0;
            intervalId = setInterval(() => {
                dispatch({
                    type: 'setRader',
                    payload: animationArr[count]
                })
        
                count += 1;
                if (count === animationArr.length) {
                    count = 0;
                }
            }, 500);
        }
        if (lifeFormsArr.length > 0) {
            animatedArr = []

            for(const type of lifeFormsArr) {
                animatedArr.push(...generateRaderAnimationArr({
                    type,
                    isLifeForm: true
                }))
                animatedArr.push(...generateRaderAnimationArr({
                    type: 'transition',
                }))
                console.log('transtionAnimation: ', generateRaderAnimationArr({
                    type: 'transition',
                }))
            }
            console.log({animatedArr})
        }
        runAnimation(animatedArr);

        return () => clearInterval(intervalId);
    }
    useEffect(() => {

        const clearAnimation = raderAnimation()
        console.log('print lifeFormSpoted ===>', lifeFormSpoted)
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (clearAnimation) {
                clearAnimation();
            }
        }

        

    }, [lifeFormSpoted])

    return (
        <ContainerWrapper
            width={(25 * 9) + 22}
            height={(25 * 9) + 54}
        >
            <div>
                <div
                    style={{
                        width: (25 * 7) + 2,
                        height: (25 * 7) + 14,
                        backgroundColor: 'orange',
                        border: '4px solid black',
                        borderRadius: 5
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${7}, 25px)`,
                    }}>
                        {rader.map((rows, i) =>
                                rows.map((col, j) => (
                                    <div
                                        key={`rader-${i}-${j}`}
                                        // className={`rader-pixel-dot ${rader[i][j] ? 'pixel-black' : ''}`}
                                        className='rader-pixel-dot'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            backgroundColor: col.color
                                        }}                         
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
                <div 
                    className='retro-game-font'
                    style={{
                        marginTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        minHeight: 30,
                        maxWidth: 150
                    }}
                >{upperCaseFirstLetter(rader[0][0].name)}</div>
            </div>
        </ContainerWrapper>
    )
}

export default LifeFormRader