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

export const surroundWhiteSpaceTestCases  = [
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.topLeft, 0, 0, 2, 2], checkArea: 'topLeft', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.topRight, 0, 3, 2, 2], checkArea: 'topRight', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.top, 0, 1, 2, 2], checkArea: 'top', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottomLeft, 3, 0, 2, 2], checkArea: 'bottomLeft', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottomRight, 3, 3, 2, 2], checkArea: 'bottomRight', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.bottom, 3, 2, 2, 2], checkArea: 'bottom', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.left, 2, 0, 2, 2], checkArea: 'left', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.right, 1, 3, 2, 2], checkArea: 'right', expected: true },
    { args: [mockVerifyLifeFormSurroundWhiteSpaceData.center, 1, 2, 2, 2], checkArea: 'center', expected: true }
];