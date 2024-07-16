import React, { useEffect, useState } from 'react';

const WinAnimation = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Simulate winning the game after 2 seconds
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`win-container ${showAnimation ? 'show' : ''}`}>
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>
            <h1>Congratulations! You Win!</h1>
        </div>
    );
};

export default WinAnimation;
