declare namespace Helpers {
    interface IPointsCalculator {
        calculateBonusTotal(scoreboardItems: Scoreboard.IScoreboardItem[])
            : number;
        calculateScoreForScoreboardItem(
            scoreboardItem: Scoreboard.IScoreboardItem): number;
        getPointsSchemeForCollectableItem(
            collectableItem: CollectableItem.ICollectableItem)
            : Game.IPointsScheme | undefined;
    }
}
