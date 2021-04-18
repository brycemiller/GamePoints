import React from 'react';
import GameZone from '../GameZone/GameZone';
import Scoreboard from '../Scoreboard/Scoreboard';
import './Game.css';

export default class Game extends
React.Component<Game.IGameProps, Game.IGameState> {
    constructor(props: Game.IGameProps) {
        super(props);
        this.state = {
            collectableItems: props.collectableItems,

            logoURL: props.logoURL,

            gameZoneLang: props.gameZoneLang,
            scoreboardLang: props.scoreboardLang,

            scoreboardItems: props.scoreboardItems,
            bonusTotal: 0,
            total: 0,
            
            newGameButton: props.newGameButton,

            pointsScheme: require('../pointsScheme.json'),
        }
    }

    onCollectItem = (collectedItem: CollectableItem.ICollectableItem): void => {
        this.updateScoreboardItems(collectedItem);
        this.updateTotal(collectedItem);
        this.updateBonusTotal(collectedItem);
    }

    onNewGame = (): void => {
        this.resetScoreboardItems();
        this.resetTotal();
        this.resetBonusTotal();
    }

    resetScoreboardItems(): void {
        this.state.scoreboardItems.forEach(scoreboardItem => {
            scoreboardItem.quantity = 0;
            scoreboardItem.score = 0;
        });
    }

    resetTotal(): void {
        this.setState({total: 0});
    }

    resetBonusTotal(): void {
        this.setState({bonusTotal: 0});
    }

    getPointsSchemeForCollectableItem(collectableItem: CollectableItem.ICollectableItem)
        : Game.IPointsScheme | undefined {
        return this.state.pointsScheme
            .filter(pointsScheme => pointsScheme.id === collectableItem.id)
            .shift();
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
    calculateScoreForQuantity(pointsScheme: Game.IPointsScheme, quantity: number): number {
        const unitPoints = pointsScheme.unitPoints;
        const bonusAmount = pointsScheme.bonusPoints.amount;
        const bonusPer = pointsScheme.bonusPoints.per;

        const numBonusGroups = bonusPer > 0 ? Math.floor(quantity / bonusPer) : 0;
        const remainder = bonusPer > 0 ? quantity % bonusPer : quantity;

        return (numBonusGroups * bonusAmount) + (remainder * unitPoints);
    }

    updateTotal(collectedItem: CollectableItem.ICollectableItem): void {
        const newTotal = this.state.scoreboardItems
            .map(scoreboardItem => scoreboardItem.score)
            .reduce((sum, currentTotal) => sum + currentTotal);

        this.setState({total: newTotal});
    }

    updateBonusTotal(collectedItem: CollectableItem.ICollectableItem): void {
        let newBonusTotal = 0;

        this.state.scoreboardItems.forEach(scoreboardItem => {
            const pointsScheme = this.getPointsSchemeForCollectableItem(scoreboardItem.collectableItem);

            if (pointsScheme !== undefined) {
                newBonusTotal +=
                    (scoreboardItem.score - (scoreboardItem.quantity * pointsScheme.unitPoints));
            }
        });

        this.setState({bonusTotal: newBonusTotal});
    }

    sortScoreboardItems(): void {
        this.state.scoreboardItems.sort((a, b) => {
            // First sort by score
            if (a.score < b.score)
                return 1;

            if (a.score > b.score)
                return -1;

            // Then, by quantity
            if (a.quantity < b.quantity)
                return 1;

            if (a.quantity > b.quantity)
                return -1;

            // Then alphabetically
            if (a.collectableItem.label > b.collectableItem.label)
                return 1;

            if (a.collectableItem.label < b.collectableItem.label)
                return -1;

            return 0;
        });
    }

    updateScoreboardItems(collectedItem: CollectableItem.ICollectableItem): void {
        // Get correct item
        const scoreboardItem = this.state.scoreboardItems
            .filter(scoreboardItem => scoreboardItem.collectableItem.id === collectedItem.id)
            .shift();

        if (scoreboardItem === undefined)
            return;

        // Get points scheme for item
        const collectableItemPointsScheme =
            this.getPointsSchemeForCollectableItem(collectedItem);

        if (collectableItemPointsScheme === undefined) {
            // No points scheme, so just update quantity collected and propagate
            scoreboardItem.quantity+=1;
            return;
        }

        // Calculate points
        const newQuantity = scoreboardItem.quantity + 1;
        const newScore = this.calculateScoreForQuantity(
            collectableItemPointsScheme, newQuantity)

        // Update scoreboard item
        scoreboardItem.quantity = newQuantity;
        scoreboardItem.score = newScore

        this.sortScoreboardItems();
    }

    render() {
        return (
            <><GameZone collectableItems={this.state.collectableItems}
                onCollectItem={this.onCollectItem}
                lang={this.state.gameZoneLang}
                logoURL={this.state.logoURL} />
            <Scoreboard scoreboardLang={this.state.scoreboardLang}
                scoreboardItems={this.state.scoreboardItems}
                bonusTotal={this.state.bonusTotal}
                total={this.state.total}
                newGameButton={this.state.newGameButton}
                onNewGame={this.onNewGame} /></>
        );
    }
}