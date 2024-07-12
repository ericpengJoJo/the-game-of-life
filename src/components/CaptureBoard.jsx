import React from 'react';

import { useGameContext } from '../context';


function CaptureBoard () {
    const { state, dispatch } = useGameContext()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    marginTop: 40,
                    width: 250,
                    height: 600,
                    backgroundColor: 'orange',
                    border: '4px solid black',
                    borderRadius: 5,
                }}
            >
                <div
                    className='retro-game-font'
                    style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: '#03A9F4',
                        borderBottom: '4px solid black',
                        display: 'flex',
                        textAlign: 'center',
                        paddingTop: 10,
                        fontSize: 20,

                    }}
                >You're beginner!</div>
                <div
                    className='retro-game-font'
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 488,
                        textAlign: 'left',
                    }}
                >
                    <div
                        className='retro-game-font'
                        style={{
                            paddingLeft: 20,
                            paddingTop: 10,
                            fontSize: 20
                        }}
                    >pokemon</div>
                </div>
            </div>
        </div>
    )
}

export default CaptureBoard;