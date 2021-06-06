import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pump from './Pump';

describe('<Pump />', () => {
  test('it should mount', () => {
    render(<Pump />);
    
    const pump = screen.getByTestId('Pump');

    expect(pump).toBeInTheDocument();
  });
});