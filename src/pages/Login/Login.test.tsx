import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Login } from './index';

const signInMock = jest.fn();

jest.mock('../../contexts/AuthContexts', () => ({
  ...jest.requireActual('../../contexts/AuthContexts'),
  useAuth: () => ({
    signIn: signInMock,
  }),
}));

describe('Login Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the login form', () => {
    render(<Login />);

    expect(screen.getByPlaceholderText('Digite seu email')).toBeTruthy();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeTruthy();
    expect(screen.getByText('Entrar')).toBeTruthy();
  });

  it('should enable the login button when email and password are valid', () => {
    render(<Login />);

    fireEvent.changeText(
      screen.getByPlaceholderText('Digite seu email'),
      'user@example.com'
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Digite sua senha'),
      'password123'
    );

    expect(screen.getByText('Entrar')).not.toBeDisabled();
  });

  it('should call handleLogin on button press', () => {
    render(<Login />);

    fireEvent.changeText(
      screen.getByPlaceholderText('Digite seu email'),
      'user@example.com'
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Digite sua senha'),
      'password123'
    );

    fireEvent.press(screen.getByText('Entrar'));

    expect(signInMock).toHaveBeenCalledWith('user@example.com', 'password123');
  });
});
