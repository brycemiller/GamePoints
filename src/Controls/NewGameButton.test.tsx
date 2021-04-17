import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewGameButton from './NewGameButton';

const newGameButtonId = 'test-id';
const newGameButtonLabel = 'test-label';
const newGameButton: Controls.INewGameButton = {
    id: newGameButtonId,
    label: newGameButtonLabel,
  }

let resetGameCalled: Boolean = false;
const resetGame = () => resetGameCalled = true;

test('button renders', () => {
    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={resetGame} />
    );

    const button = screen.getByText(newGameButtonLabel);
    expect(button).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    render (
        <NewGameButton newGameButton={newGameButton} onNewGame={resetGame} />
    );

    const button = screen.getByText(newGameButtonLabel);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(resetGameCalled).toBeTruthy();
});