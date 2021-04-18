import PointsCalculator from "../Helpers/PointsCalculator";

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

        newGameButton: Controls.INewGameButton,

        pointsScheme: Game.IPointsScheme[],
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

        pointsCalculator: Helpers.IPointsCalculator,
    }
}