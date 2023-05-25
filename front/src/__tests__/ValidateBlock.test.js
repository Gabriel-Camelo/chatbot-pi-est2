import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ValidateBlock from "../components/Chat/ValidateBlock";


test("Renderização: Sim", () => {
  const setValidationMock = jest.fn();
  render(<ValidateBlock setValidation={setValidationMock} />);

  // Verifica se o texto "Essa reposta foi útil?" aparece na tela
  expect(screen.getByText("Essa reposta foi útil?")).toBeInTheDocument();

  // Clica no botão "Sim"
  userEvent.click(screen.getByText("Sim"));

  // Verifica se a função setValidation foi chamada com o valor correto
  expect(setValidationMock).toHaveBeenCalledWith({ result: "yes" });
});

test("Renderização: Não", () => {
  const setValidationMock = jest.fn();
  render(<ValidateBlock setValidation={setValidationMock} />);

  // Verifica se o texto "Essa reposta foi útil?" aparece na tela
  expect(screen.getByText("Essa reposta foi útil?")).toBeInTheDocument();

  // Clica no botão "Não"
  userEvent.click(screen.getByText("Não"));

  // Verifica se a função setValidation foi chamada com o valor correto
  expect(setValidationMock).toHaveBeenCalledWith({ result: "no" });
});