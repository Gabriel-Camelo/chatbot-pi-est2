import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Frame from "../components/Frame";


const mockProps = {
  src: 'https://example.com/image.png',
  alt: 'Test Image',
  className: 'test-image',
  tittle: 'Test Tittle',
  to: '/'
};

test('Renderização', () => {
  render(
    <Router>
      <Frame {...mockProps} />
    </Router>
  );

  const imageElement = screen.getByAltText(mockProps.alt);
  expect(imageElement).toBeInTheDocument();

  const titleElement = screen.getByText(mockProps.tittle);
  expect(titleElement).toBeInTheDocument();

  //Navegação
  const linkElement = screen.getByText('Acessar');
  act(() => {
    linkElement.click();
  });

  expect(window.location.pathname).toBe(mockProps.to);
});