declare namespace Controls {
    interface INewGameButton {
        id: string;
        label: string;
    }

    interface INewGameButtonProps {
        newGameButton: Controls.INewGameButton;
        resetGame: Controls.ResetGame;
    }
    
    interface INewGameButtonState {
        id: string;
        label: string;
        resetGame: Controls.ResetGame;
    }

    type ResetGame = () => void;
}
