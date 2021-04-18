import { fireEvent, render, screen } from '@testing-library/react';
import { newGameButton } from '../TestHelpers/testSettings';
import NewGameButton from './NewGameButton';

test('button renders', () => {
    const handleClick = jest.fn();

    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={handleClick} />
    );

    // Ensure new game button label is rendered
    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    const handleClick = jest.fn();

    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={handleClick} />
    );

    // Ensure new game button label is present
    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();

    // Click button and ensure handler function has been called
    fireEvent.click(button, handleClick);
    expect(handleClick).toHaveBeenCalledTimes(1);
});