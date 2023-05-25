import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from "@testing-library/react";
import TextBox from '../components/Chat/TextBox';

test("Renderização", () => {
  const setUserMSGMock = jest.fn();
  render(<TextBox setUserMSG={setUserMSGMock} />);

  // Verifica se o input e o botão de envio existem na tela
  const input = screen.getByPlaceholderText("Por favor, digite aqui para interagir com o chat");
  const botaoEnvio = screen.getByRole("button", { name: "icone de envio" });

  // Simula a digitação e envio da mensagem pelo usuário
  fireEvent.change(input, { target: { value: "Olá, gostaria de saber mais sobre os seus produtos" } });
  fireEvent.click(botaoEnvio);

  // Verifica se a função setUserMSG foi chamada corretamente
  expect(setUserMSGMock).toHaveBeenCalledTimes(1);
  expect(setUserMSGMock).toHaveBeenCalledWith({
    type: "user",
    text: "Olá, gostaria de saber mais sobre os seus produtos",
  });
});