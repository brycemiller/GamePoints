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

        logoURL: string,

        gameZoneLang: GameZone.IGameZoneLang,
        scoreboardLang: Scoreboard.IScoreboardLang,

        scoreboardItems: Scoreboard.IScoreboardItem[],

        newGameButton: Controls.INewGameButton,
    }

    interface IGameState {
        collectableItems: CollectableItem.ICollectableItem[],

        logoURL: string,

        gameZoneLang: GameZone.IGameZoneLang,
        scoreboardLang: Scoreboard.IScoreboardLang,

        scoreboardItems: Scoreboard.IScoreboardItem[],
        bonusTotal: number,
        total: number,
        
        newGameButton: Controls.INewGameButton,

        pointsScheme: IPointsScheme[],
    }
}