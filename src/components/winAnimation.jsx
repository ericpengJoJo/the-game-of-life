import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { useGameContext } from '../context';
import winMusic from '../sounds/winMusic.mp3'

const WinAnimation = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const { dispatch } = useGameContext()

    const [playWinBGM, { stop }] = useSound(
        winMusic,
        { volume: 0.5, loop: true }
    )

    function handleReset () {
        dispatch({ type: 'reset' })
    };
    useEffect(()=>{
    playWinBGM()

    return () => {
        stop()
    }

    }, [playWinBGM, stop])

    useEffect(() => {
        // Simulate winning the game after 2 seconds
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`win-container ${showAnimation ? 'show' : ''}`}
            onClick={() => handleReset()}
        >
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>
            <div className='win-font'>Congratulations!</div>
            <div className='win-font' style={{
                marginTop: 250
            }}>You are Life Form-mon Master!</div>
            <div className='win-font fade-text' style={{
                marginTop: 500,
                fontSize: 30
            }}>Click Anywhere to Restart the Game!</div>
        </div>
    );
};

export default WinAnimation;
