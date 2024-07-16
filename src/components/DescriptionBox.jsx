import React from 'react';

import { useGameContext } from '../context';
import ContainerWrapper from './ContainerWrapper';
import ExampleBox from './ExampleBox';

function DescriptionBox () {
    const {
        state,
    } = useGameContext()

    const lifeFormsNum = Object.keys(state.lifeFormSpoted).length
    return (
        <div
            style={{
                display: 'flex'
            }}
        >
            <ContainerWrapper
                width={(20 * 30) + 195}
                height={300}
            >
                <div className='retro-game-font'>
                    <h2>How To Play</h2>
                    <ul
                      style={{ 
                        textAlign: 'left',
                        padding: '0 20px',
                        marginLeft: '20px'
                    }}>
                        <li>Follow the hint and create your first LifeForm-mon by clicking the grid of squares above or click Randomize</li>
                        <li>Once you are ready, hit start to watch your LifeForm-mon turn alive (Some LifeForm-mons do not move)</li>
                        <li>Pause the game to capture the LifeForm-mons</li>
                        <li>Win game by capture all {lifeFormsNum} LifeForm-mons</li>

                    </ul>
                </div>
            </ContainerWrapper>
            <ExampleBox />
        </div>
    )
}

export default DescriptionBox;