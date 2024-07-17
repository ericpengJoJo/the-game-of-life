import { lifeFormPosition } from '../../instance';

export const mockGenerateEmptyGameBoardData = {
    customArg: [[0,0,0,0,0], [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
}

const mockVerifyLifeFormSurroundWhiteSpaceData = {
    topLeft: [[1,1,0,0,0], [1,1,0,0,0], [0,0,0,0,0], [0,0,0,0,0],[0,0,0,0,0]],
    topRight: [[0,0,0,1,1], [0,0,0,1,1], [0,0,0,0,0], [0,0,0,0,0],[0,0,0,0,0]],
    top: [[0,1,1,0,0], [0,1,1,0,0], [0,0,0,0,0], [0,0,0,0,0],[0,0,0,0,0]],
    bottomLeft: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,1,0,0,0],[1,1,0,0,0]],
    bottomRight: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,1,1],[0,0,0,1,1]],
    bottom: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,1,1,0],[0,0,1,1,0]],
    left: [[0,0,0,0,0], [0,0,0,0,0], [1,1,0,0,0], [1,1,0,0,0],[0,0,0,0,0]],
    right: [[0,0,0,0,0], [0,0,0,1,1], [0,0,0,1,1], [0,0,0,0,0],[0,0,0,0,0]],
    center: [[0,0,0,0,0], [0,0,1,1,0], [0,0,1,1,0], [0,0,0,0,0],[0,0,0,0,0]],
}

export const locatedLifeFormTestCases = [
    { args: [0, 0, 2, 2, 24, 49], expected: lifeFormPosition.topLeft },
    { args: [0, 48, 2, 2, 24, 49], expected: lifeFormPosition.topRight },
    { args: [0, 12, 2, 2, 24, 49], expected: lifeFormPosition.top },
    { args: [23, 0, 2, 2, 24, 49], expected: lifeFormPosition.bottomLeft },
    { args: [23, 48, 2, 2, 24, 49], expected: lifeFormPosition.bottomRight },
    { args: [23, 35, 2, 2, 24, 49], expected: lifeFormPosition.bottom },
    { args: [14, 48, 2, 2, 24, 49], expected: lifeFormPosition.right },
    { args: [14, 0, 2, 2, 24, 49], expected: lifeFormPosition.left },
    { args: [10, 32, 2, 2, 24, 49], expected: lifeFormPosition.center },
];

export const surroundWhiteSpaceTestCases  = [
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.topLeft, 0, 0, 2, 2, lifeFormPosition.topLeft], checkArea: 'topLeft', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.topRight, 0, 3, 2, 2, lifeFormPosition.topRight], checkArea: 'topRight', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.top, 0, 1, 2, 2, lifeFormPosition.top], checkArea: 'top', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottomLeft, 3, 0, 2, 2, lifeFormPosition.bottomLeft], checkArea: 'bottomLeft', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottomRight, 3, 3, 2, 2, lifeFormPosition.bottomRight], checkArea: 'bottomRight', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottom, 3, 2, 2, 2, lifeFormPosition.bottom], checkArea: 'bottom', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.left, 2, 0, 2, 2, lifeFormPosition.left], checkArea: 'left', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.right, 1, 3, 2, 2, lifeFormPosition.right], checkArea: 'right', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.center, 1, 2, 2, 2, lifeFormPosition.center], checkArea: 'center', expected: true }
];

export const mockGenerateRaderAnimationArrData = {
    mockGlidermon: [
        [
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ]
        ],
        [
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ]
        ],
        [
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ]
        ],
        [
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "#FF5722",
                    "value": 1
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ],
            [
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                },
                {
                    "name": "glidermon",
                    "color": "",
                    "value": 0
                }
            ]
        ]
    ]
    
}

