import React, { useEffect } from 'react';
import useSound from 'use-sound';

import { useGameContext } from '../context';
import {  upperCaseFirstLetter } from '../utils/helpers'
import blockmonSound from '../sounds/lifeFormMon/blockmonSound.mp3'
import beehivemonSound from '../sounds/lifeFormMon/beehivemonSound.mp3'
import loafmonSound from '../sounds/lifeFormMon/loafmonSound.mp3'
import boatmonSound from '../sounds/lifeFormMon/boatmonSound.mp3'
import tubmonSound from '../sounds/lifeFormMon/tubmonSound.mp3'
import toadmonSound from '../sounds/lifeFormMon/toadmonSound.mp3'
import beaconmonSound from '../sounds/lifeFormMon/beaconmonSound.mp3'
import glidermonSound from '../sounds/lifeFormMon/glidermonSound.mp3'
import blinkermonSound from '../sounds/lifeFormMon/blinkermonSound.mp3'



function CaptureBoard () {
    const { state, dispatch } = useGameContext()
    const { lifeFormSpoted, user } = state;
    const [blockmonRaw] = useSound(blockmonSound);
    const [beehivemonRaw] = useSound(beehivemonSound);
    const [loafmonRaw] = useSound(loafmonSound);
    const [boatmonRaw] = useSound(boatmonSound);
    const [tubmonRaw] = useSound(tubmonSound);
    const [toadmonRaw] = useSound(toadmonSound);
    const [beaconmonRaw] = useSound(beaconmonSound);
    const [glidermonRaw] = useSound(glidermonSound);
    const [blinkermonRaw] = useSound(blinkermonSound);

    
    function handleLifeFormSound (){
        if (user.lifeFormList.length < 1) return
        const newCapture = user.lifeFormList[user.lifeFormList.length - 1]
        if (!state.soundPlayed.includes(newCapture)){
            switch (newCapture) {
                case 'blinkermon':
                    blinkermonRaw()
                    break;
                case 'blockmon':
                    blockmonRaw()
                    break;
                case 'beehivemon':
                    beehivemonRaw()
                    break;
                case 'loafmon':  
                    loafmonRaw()
                    break;
                case 'boatmon':
                    boatmonRaw()
                    break;
                case 'tubmon':
                    tubmonRaw()
                    break;
                case 'toadmon':
                    toadmonRaw()
                    break;
                case 'beaconmon':
                    beaconmonRaw()
                    break;
                case 'glidermon':
                    glidermonRaw()
                    break;
                default:
                    throw new Error(`Unknown life form sound: ${newCapture}`);
            }

            dispatch({
                type: 'setSoundPlayed',
                payload: newCapture
            })
        }
    }

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

    useEffect(() => {
        handleLifeFormSound()
    }, [lifeFormSpoted])


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