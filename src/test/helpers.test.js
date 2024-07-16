// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { upperCaseFirstLetter } from '../utils/helpers'


test('uppercase the first letter of a string', () => {
  expect(upperCaseFirstLetter('hello')).toBe('Hello');
});

