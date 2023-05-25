import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BadLoading from '../components/Chat/BadLoading';

test('Renderização', () => {
  render(<BadLoading />);
  const texto = screen.getByText('Erro ao se conectar com o servidor, tente novamente mais tarde..');
  expect(texto).toBeInTheDocument();
});

