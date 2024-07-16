// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { lifeFormPosition } from '../instance';
import {
    upperCaseFirstLetter,
    generateEmptyGameBoard,
    verifyLifeForm,
    locatedLifeForm,
    verifyLifeFormSuroundWhiteSpace
} from '../utils/helpers'
import {
    mockGenerateEmptyGameBoardData
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
    const testCases = [
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

    for (const { args, expected } of testCases) {
        test(`locatedLifeForm(${args}) should return ${expected}`, () => {
            expect(locatedLifeForm(...args)).toBe(expected);
        });
    }
})

describe('generateEmptyGameBoard function tests', () => {
    test('generateEmptyGameBoard generate the correct amount of nested arrays with custom argument', () => {
      expect(JSON.stringify(generateEmptyGameBoard(5, 5))).toBe(JSON.stringify(mockGenerateEmptyGameBoardData.customArg));
    });
})


