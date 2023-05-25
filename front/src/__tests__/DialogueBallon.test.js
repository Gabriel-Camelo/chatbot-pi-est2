import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import DialogueBallon from '../components/Chat/DialogueBallon';

test('Renderização', () => {
  render(<DialogueBallon side="left" text="Olá, como posso ajudar?"/>);

  //Verificação do caminho da imagem
  const chatTail = screen.getByAltText('cauda do balão');
  expect(chatTail.src).toMatch(/\/img\/chat\/chatTailleft\.png/);

  //Verificação do texto apresentado no componente
  const baloonText = screen.getByText('Olá, como posso ajudar?');
  expect(baloonText).toBeInTheDocument();
});