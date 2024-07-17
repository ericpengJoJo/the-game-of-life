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
                width={(20 * 30) + 225}
                height={300}
            >
                <div className='retro-game-font'>
                    <h2>How To Play</h2>
                    <ul
                      style={{ 
                        textAlign: 'left',
                        maxHeight: 250,
                        marginBottom: 20,
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#03A9F4 white',
                        overflowY: 'scroll',
                    }}>
                        <li>Imagine each grid square you see above represents a cell. The dark green square is a living cell, and the light green square is a dead cell. Each cell interacts with its surrounding environment, and the following rules determine the state of each cell in the next generation</li>
                        <br />
                        <li>A dead cell will be overjoyed and jump out of the graveyard when it is surrounded by 3 living neighbors (turns into a living cell).</li>
                        <br />
                        <li>A living cell dances with 2 or 3 living neighbors in perfect harmony, no more and no less, just the right amount of neighbors.</li>
                        <br />
                        <li>Unfortunately, all living cells are introverts and will die if they are surrounded by more than 3 living neighbors.</li>
                        <br />
                        <li>A living cell can also die when it has fewer than 2 living neighbors; it's too awkward to be with just one living cell...</li>
                        <br />
                        <li>Follow the hint and create your first LifeForm-mon by clicking the grid of squares above or click Randomize</li>
                        <br />
                        <li>Once you are ready, hit start to watch your LifeForm-mon turn alive (Some LifeForm-mons do not move)</li>
                        <br />
                        <li>Pause the game to capture the LifeForm-mons</li>
                        <br />
                        <li>Win game by capture all {lifeFormsNum} LifeForm-mons</li>

                    </ul>
                </div>
            </ContainerWrapper>
            <ExampleBox />
        </div>
    )
}

export default DescriptionBox;