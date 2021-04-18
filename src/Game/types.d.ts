import PointsCalculator from "../Helpers/PointsCalculator";

declare namespace Game {
    interface IBonusPointsScheme {
        amount: number;
        per: number;
    }

    interface IPointsScheme {
        id: string;
        bonusPoints: IBonusPointsScheme;
        unitPoints: number;
    }

    interface IGameProps {
        collectableItems: CollectableItem.ICollectableItem[];
        gameZoneLang: GameZone.IGameZoneLang;
        logoURL: string;
        newGameButton: Controls.INewGameButton;
        pointsScheme: Game.IPointsScheme[];
        scoreboardLang: Scoreboard.IScoreboardLang;
    }

    interface IGameState {
        bonusTotal: number;
        collectableItems: CollectableItem.ICollectableItem[];
        gameZoneLang: GameZone.IGameZoneLang;
        logoURL: string;
        newGameButton: Controls.INewGameButton;
        pointsCalculator: Helpers.IPointsCalculator;
        scoreboardItems: Scoreboard.IScoreboardItem[];
        scoreboardLang: Scoreboard.IScoreboardLang;
        total: number;
    }
}