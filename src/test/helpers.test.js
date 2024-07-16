// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { upperCaseFirstLetter } from '../utils/helpers'


describe('upperCaseFirstLetter function tests', () => {
    test('uppercase the first letter of a string', () => {
      expect(upperCaseFirstLetter('hello')).toBe('Hello');
    });

    test('return argument itself if the argument isn\'t a string', () => {
        expect(upperCaseFirstLetter(123)).toBe(123);
      });
});

