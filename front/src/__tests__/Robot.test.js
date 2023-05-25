import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Robot from '../components/Chat/Robot';

test('Renderização', () => {
    render(<Robot />);
    const robotImage = screen.getByAltText("icone de robô");
    expect(robotImage).toBeInTheDocument();
    expect(robotImage).toHaveAttribute("src", "/img/chat/bot.png");
});
