declare namespace Controls {
    interface INewGameButton {
        id: string;
        label: string;
    }

    interface INewGameButtonProps {
        newGameButton: INewGameButton;
        onNewGame: OnNewGame;
    }
    
    interface INewGameButtonState {
        id: string;
        label: string;
        onNewGame: OnNewGame;
    }

    type OnNewGame = () => void;
}
