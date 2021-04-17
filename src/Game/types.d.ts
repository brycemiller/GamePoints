declare namespace Game {
    interface IBonusPointsScheme {
        amount: number,
        per: number,
    }

    interface IPointsScheme {
        id: string,
        unitPoints: number,
        bonusPoints: IBonusPointsScheme,
    }

    interface IGameProps {
        collectableItems: CollectableItem.ICollectableItem[],

        gameName: string,
        gameZoneClassName: string,
        logoAltText: string,
        logoURL: string,

        scoreboardLang: Scoreboard.IScoreboardLang,

        scoreboardItems: Scoreboard.IScoreboardItem[],

        newGameButton: Controls.INewGameButton,
        resetGame: Controls.ResetGame,
    }

    interface IGameState {
        collectableItems: CollectableItem.ICollectableItem[],

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

        pointsScheme: IPointsScheme[],
    }
}