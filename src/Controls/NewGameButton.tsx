import React from 'react';
import './Controls.css';

/**
 * A class for rendering a "New Game"-button, for reseting the game state and
 * starting a new game.
 */
export default class NewGameButton extends
React.Component<Controls.INewGameButtonProps, Controls.INewGameButtonState> {
    constructor(props: Controls.INewGameButtonProps) {
        super(props);
        this.state = {
            id:  props.newGameButton.id,
            label: props.newGameButton.label,
            onNewGame: props.onNewGame,
        }
    }

    render() {
        return (
            <button className="newGameButton green" onClick={() => this.state.onNewGame()}>
                {this.state.label}
            </button>
        );
    }
}
