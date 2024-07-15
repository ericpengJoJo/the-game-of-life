import React, { useEffect } from 'react';

import { useGameContext } from '../context';
import {  upperCaseFirstLetter } from '../utils/helpers'


function CaptureBoard () {
    const { state } = useGameContext()
    const { lifeFormSpoted, user } = state;

    useEffect(() => {

    }, [lifeFormSpoted])

    function handleLifeFormList () {

        const list = user.lifeFormList
        return list.map(name => (
            <div
                key={`list-${name}`}
                className='retro-game-font'
                style={{
                    paddingLeft: 20,
                    paddingTop: 10,
                    fontSize: 20,
                    marginBottom: 10,
                    fontWeight: 'bold'
                }}
            >
                {upperCaseFirstLetter(name)}
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
                        borderBottom: '4px solid #FFFAFA',
                        fontWeight: 500,
                        color: 'white',
                        textAlign: 'space-around',
                        paddingTop: 10,
                        fontSize: 30,
                    }}
                >
                    <div style={{
                        marginTop: 5
                    }}>Score:</div>
                    <div style={{
                        marginTop: 15
                    }}>{user.score}</div>
                </div>
                <div
                    className='retro-game-font'
                    style={{
                        backgroundColor: '#FFFAFA',
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