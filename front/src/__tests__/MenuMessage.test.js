import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuMessage from '../components/Chat/MenuMessage';


test('Renderização', () => {
  const questions = [
    { pergunta: 'Qual é a sua idade?', resposta: 'Eu sou um robô, eu não tenho idade.' },
    { pergunta: 'Qual é a sua cor favorita?', resposta: 'Eu não tenho uma cor favorita.' },
  ];
  const setSelection = jest.fn();
  render(<MenuMessage setSelection={setSelection}>{questions}</MenuMessage>);
  expect(screen.getByText("Qual é a sua idade?")).toBeInTheDocument();
  expect(screen.getByText('Qual é a sua cor favorita?')).toBeInTheDocument();
});

test('Interação', () => {
  const questions = [{ pergunta: 'Qual é a sua idade?', resposta: 'Eu sou um robô, eu não tenho idade.' }];
  const setSelection = jest.fn();
  render(<MenuMessage setSelection={setSelection}>{questions}</MenuMessage>);
  const button = screen.getByText('Qual é a sua idade?');
  fireEvent.click(button);
  expect(setSelection).toHaveBeenCalledWith({ text: 'Eu sou um robô, eu não tenho idade.', counter: 0 });
});

