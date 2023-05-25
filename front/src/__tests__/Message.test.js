import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Message from '../components/Chat/Message';


test("Renderização: robot", () => {
  const messageText = "Hello, I'm a robot";
  render(<Message type="robot" text={messageText} />);
  const robotAvatar = screen.getByTestId("robot-avatar");
  const dialogBalloon = screen.getByTestId("dialog-balloon");
  expect(robotAvatar).toBeInTheDocument();
  expect(dialogBalloon).toHaveTextContent(messageText);
});

test("Renderização: user", () => {
  const messageText = "Hello, I'm a user";
  render(<Message type="user" text={messageText} />);
  const userAvatar = screen.getByTestId("user-avatar");
  const dialogBalloon = screen.getByTestId("dialog-balloon");
  expect(userAvatar).toBeInTheDocument();
  expect(dialogBalloon).toHaveTextContent(messageText);
});
