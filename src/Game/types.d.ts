declare namespace Game {
    interface IGameProps {
        collectableItems: CollectableItem.ICollectableItem[],
        collectCollectable: CollectableItem.CollectCollectable,

        gameName: string,
        gameZoneClassName: string,
        logoAltText: string,
        logoURL: string,

        scoreboardLang: Scoreboard.IScoreboardLang,

        scoreboardItems: Scoreboard.IScoreboardItem[],
        bonusTotal: number,
        total: number,

        newGameButton: Controls.INewGameButton,
        resetGame: Controls.ResetGame,
    }

    interface IGameState {
        collectableItems: CollectableItem.ICollectableItem[],
        collectCollectable: CollectableItem.CollectCollectable,

        gameName: string,
        gameZoneClassName: string,
        logoAltText: string,
        logoURL: string,

        scoreboardLang: Scoreboard.IScoreboardLang,

        scoreboardItems: Scoreboard.IScoreboardItem[],
        bonusTotal: number,
        total: number,
        
        newGameButton: Controls.INewGameButton,
        resetGame: Controls.ResetGame,
    }
}