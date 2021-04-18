import { Game } from "../Game/types";

export default class PointsCalculator implements Helpers.IPointsCalculator {
    private pointsSchemes: Game.IPointsScheme[];

    constructor(pointsSchemes: Game.IPointsScheme[]) {
        this.pointsSchemes = pointsSchemes;
    }
    /**
     * Calculates the total score, including bonuses, for a given quantity and a
     * given points scheme.
     * 
     * The bonus amount is defined in terms of total points for a group of X items.
     *
     * To calculate the new total, we need to know the number of bonus groupings,
     * and the number of items remaining.
     *
     * We multiply each of these by their respective values, and sum them together
     * to get the new score.
     */
    public calculateScoreForScoreboardItem(
        scoreboardItem: Scoreboard.IScoreboardItem): number {
        const pointsScheme = this.getPointsSchemeForCollectableItem(
                scoreboardItem.collectableItem);

        if (pointsScheme === undefined) {
            return 0;
        }

        const quantity = scoreboardItem.quantity;
        const unitPoints = pointsScheme.unitPoints;
        const bonusAmount = pointsScheme.bonusPoints.amount;
        const bonusPer = pointsScheme.bonusPoints.per;

        const numBonusGroups = bonusPer > 0 ? Math.floor(quantity / bonusPer) : 0;
        const remainder = bonusPer > 0 ? quantity % bonusPer : quantity;

        return (numBonusGroups * bonusAmount) + (remainder * unitPoints);
    }

    public calculateBonusTotal(scoreboardItems: Scoreboard.IScoreboardItem[]): number {
        let newBonusTotal = 0;

        scoreboardItems.forEach(scoreboardItem => {
            const pointsScheme = this.getPointsSchemeForCollectableItem(
                scoreboardItem.collectableItem);

            if (pointsScheme !== undefined) {
                newBonusTotal +=
                    (scoreboardItem.score -
                        (scoreboardItem.quantity * pointsScheme.unitPoints)
                    );
            }
        });

        return newBonusTotal;
    }

    public getPointsSchemeForCollectableItem(collectableItem: CollectableItem.ICollectableItem)
        : Game.IPointsScheme | undefined {
        return this.pointsSchemes
            .filter(pointsScheme => pointsScheme.id === collectableItem.id)
            .shift();
    }
}