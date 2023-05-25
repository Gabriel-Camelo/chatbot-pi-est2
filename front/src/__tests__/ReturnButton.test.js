import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import '@testing-library/jest-dom';

import ReturnButton from '../components/ReturnButton';

  test('Renderização', () => {
    render(
      <Router> 
        <ReturnButton
          h="10"
          left="20"
          top="30"
          bg="blue"
          color="white"
          value="Return"
          to="/"
        />
      </Router> 
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });



