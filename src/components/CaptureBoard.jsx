import React from 'react';

import { useGameContext } from '../context';


function CaptureBoard () {
    const { state, dispatch } = useGameContext()
    return (
        <div
            style={{
                marginTop: 40,
                width: 200,
                height: 500,
                backgroundColor: 'orange',
                border: '4px solid black',
                borderRadius: 5
            }}
        >
            <div>Capture Board</div>
        </div>
    )
}

export default CaptureBoard;