import {
    upperCaseFirstLetter,
    generateEmptyGameBoard,
    verifyLifeForm,
    locatedLifeForm,
    verifyLifeFormSurroundWhiteSpace,
    generateRaderAnimationArr
} from '../utils/helpers'
import {
    mockGenerateEmptyGameBoardData,
    locatedLifeFormTestCases,
    surroundWhiteSpaceTestCases,
    mockGenerateRaderAnimationArrData
} from './mock/helpersMock';



describe('upperCaseFirstLetter function tests', () => {
    test('uppercase the first letter of a string', () => {
      expect(upperCaseFirstLetter('hello')).toBe('Hello');
    });

    test('return argument itself if the argument isn\'t a string', () => {
        expect(upperCaseFirstLetter(123)).toBe(123);
      });
});

describe('generateEmptyGameBoard function tests', () => {
    test('generateEmptyGameBoard generate the correct amount of nested arrays with custom argument', () => {
      expect(JSON.stringify(generateEmptyGameBoard(5, 5))).toBe(JSON.stringify(mockGenerateEmptyGameBoardData.customArg));
    });
})

describe('locatedLifeForm function tests', () => {
    for (const { args, expected } of locatedLifeFormTestCases) {
        test(`locatedLifeForm(${args}) should return ${expected}`, () => {
            expect(locatedLifeForm(...args)).toBe(expected);
        });
    }
})

describe('verifyLifeFormSurroundWhiteSpace function tests', () => {
    for (const { args, checkArea, expected } of surroundWhiteSpaceTestCases) {
        test(`verifyLifeFormSurroundWhiteSpace with rows 5, cols 5, current location x:${args[2]}, y:${args[1]} for ${checkArea} should return ${expected}`, () => {
            expect(verifyLifeFormSurroundWhiteSpace(...args)).toBe(expected);
        });
    }
})

describe('generateRaderAnimationArr function tests', () => {
    test('generateRaderAnimationArr function generate glidermon arrays correctly', () => {
        expect(JSON.stringify(generateRaderAnimationArr({ type: 'glidermon', isLifeForm: true}))).toBe(JSON.stringify(mockGenerateRaderAnimationArrData.mockGlidermon));
      });
})


