/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react-native';

jest.useFakeTimers();

it('renders correctly', () => {
  const { getByTestId } = render(<App />);
  const mainScreen = getByTestId('mainScreenId');
  expect(mainScreen).toBeTruthy();
});
