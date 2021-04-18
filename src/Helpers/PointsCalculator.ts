import { Game } from "../Game/types";

/**
 * A helper class for calculating points for socreboard items, based on a given
 * array of points schemes.
 */
export default class PointsCalculator implements Helpers.IPointsCalculator {
    /**
     * @var pointsSchemes   An array of point schemes used in the calculations
     */
    private pointsSchemes: Game.IPointsScheme[];

    constructor(pointsSchemes: Game.IPointsScheme[]) {
        pointsSchemes.forEach((pointsScheme: Game.IPointsScheme): void => {
            pointsScheme.unitPoints = pointsScheme.unitPoints >= 0
                ? pointsScheme.unitPoints
                : 0;
            pointsScheme.bonusPoints.amount = pointsScheme.bonusPoints.amount >= 0
                ? pointsScheme.bonusPoints.amount
                : 0;
            pointsScheme.bonusPoints.per = pointsScheme.bonusPoints.per >= 0
                ? pointsScheme.bonusPoints.per
                : 0;

            /**
             * If bonus amount is not greater than 0, then it doesn't make sense
             * to award points per item, so set per to 0 here as well
             */
            pointsScheme.bonusPoints.per = pointsScheme.bonusPoints.amount > 0
                ? pointsScheme.bonusPoints.per
                : 0;
        });

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
     * 
     * The calculation relies on the points schemes this class was instatiated with.
     * 
     * @param   scoreboardItem    The item to calculate the score for
     * @returns The calculated points, based on the points scheme
     */
    public calculateScoreForScoreboardItem(
        scoreboardItem: Scoreboard.IScoreboardItem): number {
        // Get the points scheme for this collectable item
        const pointsScheme = this.getPointsSchemeForCollectableItem(
                scoreboardItem.collectableItem);

        // Any item without a points scheme will yield 0 points
        if (pointsScheme === undefined) {
            return 0;
        }

        const quantity = scoreboardItem.quantity;
        const unitPoints = pointsScheme.unitPoints;
        const bonusAmount = pointsScheme.bonusPoints.amount;
        const bonusPer = pointsScheme.bonusPoints.per;

        // How many groups of per can the quantity be divided into?
        const numBonusGroups = bonusPer > 0 ? Math.floor(quantity / bonusPer) : 0;

        // How many items are reamining after we've removed the bonus groups?
        const remainder = bonusPer > 0 ? quantity % bonusPer : quantity;

        // Calculate bonus amount and the points per remaining item
        return (numBonusGroups * bonusAmount) + (remainder * unitPoints);
    }

    /**
     * Calculates the total bonus across the given scoreboard items, based on the
     * array of points schemes this class was instantiated with.
     * 
     * @param scoreboardItems   All the scoreboard items
     * @returns The total bonus awarded for the scoreboard items provided
     */
    public calculateBonusTotal(scoreboardItems: Scoreboard.IScoreboardItem[]): number {
        let newBonusTotal = 0;

        // Get the points scheme for each item and add the calculated bonus to the total
        scoreboardItems.forEach(scoreboardItem => {
            const pointsScheme = this.getPointsSchemeForCollectableItem(
                scoreboardItem.collectableItem);

            if (pointsScheme !== undefined) {
                /* Substract the expected score for the given quantity from the actual
                   score to find the bonus */
                newBonusTotal +=
                    (scoreboardItem.score -
                        (scoreboardItem.quantity * pointsScheme.unitPoints)
                    );
            }
        });

        return newBonusTotal;
    }

    /**
     * Gets the points scheme for the given item, based on the array of points schemes
     * this class was instatiated with.
     * 
     * @param collectableItem   The item we want to get the points scheme for
     * @returns The points scheme or undefined if there is no points scheme for this item
     */
    public getPointsSchemeForCollectableItem(collectableItem: CollectableItem.ICollectableItem)
        : Game.IPointsScheme | undefined {
        return this.pointsSchemes
            .filter(pointsScheme => pointsScheme.id === collectableItem.id)
            .shift();
    }
}