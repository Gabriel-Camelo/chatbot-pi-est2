import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import User from '../components/Chat/User';

test('Renderização', () => {
    render(<User/>);
    const robotImage = screen.getByAltText("icone de usuário");
    expect(robotImage).toBeInTheDocument();
    expect(robotImage).toHaveAttribute("src", "/img/chat/user.png");
});
