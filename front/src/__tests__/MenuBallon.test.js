import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MenuBallon from '../components/Chat/MenuBallon';

test('Renderização', () => {
  const children = (
    <>
      <p>Opção 1</p>
      <p>Opção 2</p>
      <p>Opção 3</p>
    </>
  );
  
  render(<MenuBallon side="right">{children}</MenuBallon>);

  //Verificação do caminho da imagem
  const chatTail = screen.getByAltText('cauda do balão');
  expect(chatTail.src).toMatch(/\/img\/chat\/chatTailright\.png/);

  //Verificação dos elementos passados na propriedade children
    const opcao1 = screen.getByText("Opção 1");
    const opcao2 = screen.getByText("Opção 2");
    const opcao3 = screen.getByText("Opção 3");
    expect(opcao1).toBeInTheDocument();
    expect(opcao2).toBeInTheDocument();
    expect(opcao3).toBeInTheDocument();

    const ballon = screen.getByTestId('ballon');
    expect(ballon.className).toContain('bg-message2');
});
