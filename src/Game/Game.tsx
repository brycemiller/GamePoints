import React from 'react';
import GameZone from '../GameZone/GameZone';
import HelperFactory from '../Helpers/HelperFactory';
import Scoreboard from '../Scoreboard/Scoreboard';
import './Game.css';
import { Game } from './types';

/**
 * A class for rendering the entire game.  This class also handles the common state. 
 */
export default class GameClass extends React.Component<Game.IGameProps, Game.IGameState> {
    constructor(props: Game.IGameProps) {
        super(props);
        this.state = {
            bonusTotal: 0,
            collectableItems: props.collectableItems,
            gameZoneLang: props.gameZoneLang,
            logoURL: props.logoURL,
            newGameButton: props.newGameButton,
            pointsCalculator: HelperFactory.PointsCalculator(props.pointsScheme),

            // Build scoreboard items array from collectable items specified
            scoreboardItems: props.collectableItems.map(
                (collectableItem: CollectableItem.ICollectableItem) => {
                return {
                    collectableItem: collectableItem,
                    quantity: 0,
                    score: 0,
                }
            }),
            scoreboardLang: props.scoreboardLang,
            total: 0,
        }
    }

    /**
     * Handles the event of an item being collected by updating the scoreboard
     * and internal state.
     * 
     * @param collectedItem     The item collected
     */
    onCollectItem = (collectedItem: CollectableItem.ICollectableItem): void => {
        this.updateScoreboardItems(collectedItem);
        this.updateTotal();
        this.updateBonusTotal();
    }

    /**
     * Handles the event of the new game button being clicked by resetting the
     * internal score state and scoreboard items.
     */
    onNewGame = (): void => {
        this.resetScoreboardItems();
        this.resetTotal();
        this.resetBonusTotal();
    }

    /**
     * Sets each scoreboard items' quantity and score back to zero.
     */
    resetScoreboardItems(): void {
        this.state.scoreboardItems.forEach(
            (scoreboardItem: Scoreboard.IScoreboardItem) => {
            scoreboardItem.quantity = 0;
            scoreboardItem.score = 0;
        });
    }

    /**
     * Resets total points back to zero.
     */
    resetTotal(): void {
        this.setState({total: 0});
    }

    /**
     * Resets the bonus back to zero.
     */
    resetBonusTotal(): void {
        this.setState({bonusTotal: 0});
    }

    /**
     * Iterates over the scoreboard items to calculate the total, and updates
     * internal state.
     */
    updateTotal(): void {
        const newTotal = this.state.scoreboardItems
            .map((scoreboardItem: Scoreboard.IScoreboardItem) => scoreboardItem.score)
            .reduce((sum: number, currentTotal: number) => sum + currentTotal);

        this.setState({total: newTotal});
    }

    /**
     * Gets the bonus total from the points calculator and updates internal state.
     */
    updateBonusTotal(): void {
        const newBonusTotal = this.state.pointsCalculator
            .calculateBonusTotal(this.state.scoreboardItems);

        this.setState({bonusTotal: newBonusTotal});
    }

    /**
     * Sorts the scoreboard items in place, first by score, then quantity, and
     * finally alphabetically.
     */
    sortScoreboardItems(): void {
        this.state.scoreboardItems.sort(
            (a: Scoreboard.IScoreboardItem, b: Scoreboard.IScoreboardItem) => {
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

    /**
     * Adds the item provided to the scoreboard and updates the corresponding
     * scoreboard item with the correct quantity and score, based on the
     * points calculator.
     * 
     * @param collectedItem     The new item the user has collected
     */
    updateScoreboardItems(collectedItem: CollectableItem.ICollectableItem): void {
        // Get correct item
        const scoreboardItem = this.state.scoreboardItems
            .filter((scoreboardItem: Scoreboard.IScoreboardItem) =>
                scoreboardItem.collectableItem.id === collectedItem.id)
            .shift();

        if (scoreboardItem === undefined)
            return;

        // Get points scheme for item
        const collectableItemPointsScheme =
            this.state.pointsCalculator
                .getPointsSchemeForCollectableItem(collectedItem);

        if (collectableItemPointsScheme === undefined) {
            // No points scheme, so just update quantity collected and propagate
            scoreboardItem.quantity+=1;
            return;
        }

        // Update scoreboard item
        scoreboardItem.quantity += 1;
        scoreboardItem.score = this.state.pointsCalculator
            .calculateScoreForScoreboardItem(scoreboardItem);

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