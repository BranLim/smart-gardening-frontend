import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContainer from './MainContainer';

describe('<MainContainer />', () => {
  test('it should mount', () => {
    render(<MainContainer />);
    
    const mainContainer = screen.getByTestId('MainContainer');

    expect(mainContainer).toBeInTheDocument();
  });
});