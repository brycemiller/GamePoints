declare namespace Controls {
    interface INewGameButton {
        id: string;
        label: string;
    }

    interface INewGameButtonProps {
        newGameButton: INewGameButton;
        resetGame: ResetGame;
    }
    
    interface INewGameButtonState {
        id: string;
        label: string;
        resetGame: ResetGame;
    }

    type ResetGame = () => void;
}
