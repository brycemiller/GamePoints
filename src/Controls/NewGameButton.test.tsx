import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewGameButton from './NewGameButton';
import { newGameButton } from '../TestHelpers/testValues';

test('button renders', () => {
    const handleClick = jest.fn();

    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={handleClick} />
    );

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    const handleClick = jest.fn();

    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={handleClick} />
    );

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();

    fireEvent.click(button, handleClick);
    expect(handleClick).toHaveBeenCalledTimes(1);
});