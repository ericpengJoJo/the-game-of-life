export const findMyNeighbors = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

export const defaultLifeFormSpoted = {
    blockmon: false,
    beehivemon: false,
    loafmon: false,
    boatmon: false,
    tubmon: false,
    blinkermon: false,
    toadmon: false,
    beaconmon: false,
    glidermon: false
}

export const lifeFormMaps = [
    {
        name: 'blockmon',
        color: '#795548',
        points: 10,
        shapes: [{
            width: 2,
            height: 2,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0}, { x: 0, y: 1}, { x: 1, y: 1 }]
        }],
        difficulty: ['easy'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [
                { x:1, y:1 }, { x:2, y:1 }, { x:3, y:1 }, { x:4, y:1 }, { x:5, y:1 }, { x:1, y:2 }, { x:2, y:2 }, { x:3, y:2 }, { x:4, y:2 }, { x:5, y:2 }, { x:1, y:3 }, { x:2, y:3 }, { x:3, y:3 }, { x:4, y:3 }, { x:5, y:3 }, { x:1, y:4 }, { x:2, y:4 }, { x:3, y:4 }, { x:4, y:4 }, { x:5, y:4 }, { x:1, y:5 }, { x:2, y:5 }, { x:3, y:5 }, { x:4, y:5 }, { x:5, y:5 }
            ]
        }]
    }, {
        name: 'blinkermon',
        color: '#4CAF50',
        points: 10,
        shapes: [{
            width: 1,
            height: 3,
            pattern: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2}]
        }, {
            width: 3,
            height: 1,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
        }],
        difficulty: ['easy'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [
                { x:3, y:1 }, { x:3, y:2 }, { x:3, y:3 }, { x:3, y:4 }, { x:3, y:5 }
            ]
        }, {
            width: 7,
            height: 7,
            pattern: [
                { x:1, y:3 }, { x:2, y:3 }, { x:3, y:3 }, { x:4, y:3 }, { x:5, y:3 }
            ]
        }]
    }, {
        name: 'beehivemon',
        color: '#9C27B0',
        points: 50,
        shapes: [{
            width: 3,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 3 }]
        }, {
            width: 4,
            height: 3,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }],
        difficulty: ['easy'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [
                { x:2, y:0 }, { x:3, y:0 }, { x:4, y:0 }, { x:1, y:1 }, { x:5, y:1 }, { x:1, y:2 }, { x:5, y:2 }, { x:1, y:3 }, { x:5, y:3 }, { x:1, y:4 }, { x:5, y:4 }, { x:1, y:5 }, { x:5, y:5 }, { x:2, y:6 }, { x:3, y:6 }, { x:4, y:6 }
            ]
        }]
    }, {
        name: 'boatmon',
        color: '#455A64',
        points: 200,
        shapes:[{
            width: 3,
            height: 3,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }],
        difficulty: ['easy', 'normal'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [
                { x:0, y:0 }, { x:1, y:0 }, { x:2, y:0 }, { x:3, y:0 }, { x:0, y:1 }, { x:1, y:1 }, { x:2, y:1 }, { x:3, y:1 }, { x:0, y:2 }, { x:1, y:2 }, { x:4, y:2 }, { x:5, y:2 }, { x:0, y:3 }, { x:1, y:3 }, { x:4, y:3 }, { x:5, y:3 }, { x:2, y:4 }, { x:3, y:4 }, { x:2, y:5 }, { x:3, y:5 }
            ]
        }]
    }, {
        name: 'loafmon',
        color: '#00BCD4',
        points: 50,
        shapes: [{
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 3, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 3, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 3 }]
        }],
        difficulty: ['easy', 'normal'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [{ x:2, y:1 }, { x:3, y:1 }, { x:4, y:1 }, { x:1, y:2 }, { x:5, y:2 }, { x:2, y:3 }, { x:5, y:3 }, { x:3, y:4 }, { x:5, y:4 }, { x:4, y:5 }]
        }]
    }, {
        name: 'toadmon',
        color: '#8BC34A',
        points: 100,
        shapes: [{
            width: 4,
            height: 4,
            pattern: [{ x: 2, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 3, y: 2 }, { x: 1, y: 3 }]
        }, {
            width: 4,
            height: 2,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 3 }]
        }, {
            width: 4,
            height: 2,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }]
        }, {
            width: 2,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }]
        }, {
            width: 2,
            height: 4,
            pattern: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }]
        }],
        difficulty: ['easy', 'normal'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [{ x: 3, y: 1 }, { x: 4, y: 1 }, { x: 1, y: 2 }, { x: 5, y: 2 }, { x: 1, y: 3 }, { x: 5, y: 3 }, { x: 1, y: 4 }, { x: 5, y: 4 }, { x: 1, y: 5 }, { x: 5, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 6 }]
        }, {
            width: 7,
            height: 7,
            pattern: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 6, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 } ]
        }]
    }, {
        name: 'beaconmon',
        color: '#536DFE',
        points: 400,
        shapes: [{
            width: 4,
            height: 4,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }]
        }, {
            width: 4,
            height: 4,
            pattern: [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }]
        }],
        difficulty: ['easy', 'normal', 'hard'],
        animation: [{
            width: 7,
            height: 7,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
        }, {
            width: 7,
            height: 7,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
        }]
    }, {
        name: 'glidermon',
        color: '#FF5722',
        points: 500,
        shapes: [{
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 2, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }]
        }, {
            width: 3,
            height: 3,
            pattern:[{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
        }],
        difficulty: ['easy', 'normal', 'hard'],
        animation:[{
            width: 7,
            height: 7,
            pattern: [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
        }, {
            width: 7,
            height: 7,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }]
        }, {
            width: 7,
            height: 7,
            pattern: [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
        }, {
            width: 7,
            height: 7,
            pattern: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }]
        }]
    }

]

/**
 *   0 1 1 0
 *   1 0 0 1
 *   1 0 1 0
 *   0 1 0 0
 */


export const formPoseType = {
    twoPoses: {
        stand: 'vertical',
        flat: 'horizontal'
    },
    fourPoses: {
        topRight: 'topRight',
        bottomRight: 'bottomRight',
        topLeft: 'topLeft',
        bottomLeft: 'bottomLeft'
    }
}

export const lifeFormPosition = {
    top: 'topCorner',
    topLeft: 'topLeftCorner',
    topRight: 'topRightCorner',
    bottom: 'bottomCorner',
    bottomLeft: 'bottomLeftCorner',
    bottomRight: 'bottomRightCorner',
    left: 'leftCorner',
    right: 'rightCorner',
    center: 'center'
}

export const raderLifeFormColors = {
    transition: '#212121',
    block: '#795548'
}

export const searchingRaderAnimation = {
    name: 'searching',
    color:'#212121',
    animation: [{
        width: 7,
        height: 7,
        pattern: [{ x: 3, y: 3 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 3, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 4 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 3, y: 1 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 2, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 5 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 3, y: 0 }, { x: 2, y: 1 }, { x: 4, y: 1 }, { x: 1, y: 2 }, { x: 5, y: 2 }, { x: 0, y: 3 }, { x: 3, y: 3 }, { x: 6, y: 3 }, { x: 1, y: 4 }, { x: 5, y: 4 }, { x: 2, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 6 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 2, y: 0 }, { x: 4, y: 0 }, { x: 1, y: 1 }, { x: 5, y: 1 }, { x: 0, y: 2 }, { x: 6, y: 2 }, { x: 3, y: 3 }, { x: 0, y: 4 }, { x: 6, y: 4 }, { x: 1, y: 5 }, { x: 5, y: 5 }, { x: 2, y: 6 }, { x: 4, y: 6 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 1, y: 0 }, { x: 5, y: 0 }, { x: 0, y: 1 }, { x: 6, y: 1 }, { x: 3, y: 3 }, { x: 0, y: 5 }, { x: 6, y: 5 }, { x: 1, y: 6 }, { x: 5, y: 6 }]
    }]
}

export const transitionAnimations = {
    name: ' ',
    color: '#212121',
    animation: [{
        width: 7,
        height: 7,
        pattern: [{ x: 0, y: 0 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 3 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 6 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 6, y: 1 }, { x: 5, y: 2 }, { x: 6, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 } ]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 6, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }]
    }, {
        width: 7,
        height: 7,
        pattern: [{ x: 6, y: 6 }]
    }]
}

export const winningAnimation = [[
    [1,0,0,0,1,1],
    [1,1,0,1,1,0],
    [0,1,1,1,0,0],
    [0,1,1,1,0,0],
    [1,1,0,1,1,0],
    [1,0,0,0,1,1],
],[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,0,0,1,0],
    [0,0,0,1,0,1],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,0,1,0,0],
    [0,0,1,0,1,0],
    [0,0,0,1,0,1],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
], [
    [0,0,1,0,0,0],
    [0,1,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,1,0,1],
    [0,0,1,0,1,0],
    [0,0,1,0,0,0],
], [
    [0,1,0,0,1,0],
    [1,0,0,1,0,1],
    [0,1,0,0,1,0],
    [0,0,1,0,0,0],
    [0,0,1,1,0,1],
    [0,0,0,0,1,0],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [1,0,1,0,0,0],
    [0,1,1,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,1,0,1],
], [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,1,1,1,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,1,0,0,0],
    [0,1,0,1,0,0],
    [1,0,1,0,1,0],
    [0,1,0,1,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
], [
    [0,0,1,0,1,0],
    [0,1,0,1,0,1],
    [1,0,1,0,1,0],
    [0,1,0,1,0,1],
    [1,0,1,0,1,0],
    [0,1,0,1,0,0],
], [
    [1,0,0,0,1,0],
    [0,0,0,0,0,1],
    [0,0,0,0,0,0],
    [0,0,0,0,0,1],
    [0,0,0,0,1,0],
    [1,0,0,1,0,0],
]]

const blockFrames = [[
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
], [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
], [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
], [
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
]];
