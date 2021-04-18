import React from 'react';
import GameZone from '../GameZone/GameZone';
import HelperFactory from '../Helpers/HelperFactory';
import Scoreboard from '../Scoreboard/Scoreboard';
import { Game } from './types';
import './Game.css';

export default class GameClass extends
React.Component<Game.IGameProps, Game.IGameState> {
    constructor(props: Game.IGameProps) {
        super(props);
        this.state = {
            collectableItems: props.collectableItems,

            logoURL: props.logoURL,

            gameZoneLang: props.gameZoneLang,
            scoreboardLang: props.scoreboardLang,

            // Build scoreboard items array from collectable items specified
            scoreboardItems: props.collectableItems.map(
                (collectableItem: CollectableItem.ICollectableItem) => {
                return {
                    collectableItem: collectableItem,
                    quantity: 0,
                    score: 0,
                }
            }),
            bonusTotal: 0,
            total: 0,
            
            newGameButton: props.newGameButton,

            pointsCalculator: HelperFactory.PointsCalculator(props.pointsScheme),
        }
    }

    onCollectItem = (collectedItem: CollectableItem.ICollectableItem): void => {
        this.updateScoreboardItems(collectedItem);
        this.updateTotal();
        this.updateBonusTotal();
    }

    onNewGame = (): void => {
        this.resetScoreboardItems();
        this.resetTotal();
        this.resetBonusTotal();
    }

    resetScoreboardItems(): void {
        this.state.scoreboardItems.forEach(
            (scoreboardItem: Scoreboard.IScoreboardItem) => {
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

    updateTotal(): void {
        const newTotal = this.state.scoreboardItems
            .map((scoreboardItem: Scoreboard.IScoreboardItem) => scoreboardItem.score)
            .reduce((sum: number, currentTotal: number) => sum + currentTotal);

        this.setState({total: newTotal});
    }

    updateBonusTotal(): void {
        const newBonusTotal = this.state.pointsCalculator
            .calculateBonusTotal(this.state.scoreboardItems);

        this.setState({bonusTotal: newBonusTotal});
    }

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