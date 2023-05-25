import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import FrameEdital from "../components/FrameEdital";

describe("Renderização", () => {
  test("renderiza o componente corretamente", () => {
    const documentName = "Exemplo.pdf";
    render(<FrameEdital document={documentName} />);
    
    const documentNameElement = screen.getByText(documentName);
    expect(documentNameElement).toBeInTheDocument();
  });
});
