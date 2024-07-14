import React, { useEffect } from 'react';

import { useGameContext } from '../context';


function CaptureBoard () {
    const { state } = useGameContext()
    const { lifeFormSpoted } = state;

    useEffect(() => {

    }, [lifeFormSpoted])

    function handleLifeFormList () {
        const list = Object.entries(lifeFormSpoted).reduce((acc, cur) => {
            if(cur[1]){
                acc.push(cur[0])
            }
            return acc;
        }, [])
        return list.map(name => (
            <div
                key={`list-${name}`}
                className='retro-game-font'
                style={{
                    paddingLeft: 20,
                    paddingTop: 10,
                    fontSize: 20
                }}
            >
                {name}
            </div>
        ))
    }

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
                    {handleLifeFormList()}
                </div>
            </div>
        </div>
    )
}

export default CaptureBoard;