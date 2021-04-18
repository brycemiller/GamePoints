declare namespace Helpers {
    interface IPointsCalculator {
        calculateScoreForScoreboardItem(
            scoreboardItem: Scoreboard.IScoreboardItem): number,
        calculateBonusTotal(scoreboardItems: Scoreboard.IScoreboardItem[])
            : number,
        getPointsSchemeForCollectableItem(
            collectableItem: CollectableItem.ICollectableItem)
            : Game.IPointsScheme | undefined
    }
}
