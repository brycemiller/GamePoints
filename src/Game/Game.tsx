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

            gameName: props.gameName,
            gameZoneClassName: props.gameZoneClassName,
            logoAltText: props.logoAltText,
            logoURL: props.logoURL,

            scoreboardLang: props.scoreboardLang,

            scoreboardItems: props.scoreboardItems,
            bonusTotal: 0,
            total: 0,
            
            newGameButton: props.newGameButton,
            resetGame: props.resetGame,
        }
    }

    onCollectItem = (collectedItem: CollectableItem.ICollectableItem) => {
        this.updateScoreboardItems(collectedItem);
        this.updateTotal(collectedItem);
        this.updateBonusTotal(collectedItem);
    }

    updateTotal(collectedItem: CollectableItem.ICollectableItem) {
        this.setState({total: this.state.total+10});
    }

    updateBonusTotal(collectedItem: CollectableItem.ICollectableItem) {
        this.setState({bonusTotal: this.state.total % 50 === 0 ?
            this.state.bonusTotal+50 :
            this.state.bonusTotal});
    }

    updateScoreboardItems(collectedItem: CollectableItem.ICollectableItem) {
        // Get correct item
        const scoreboardItem = this.state.scoreboardItems
            .filter(scoreboardItem => scoreboardItem.collectableItem.id === collectedItem.id)
            .shift();

        // Only legitimate collected items should be counted
        if (scoreboardItem !== undefined) {
            scoreboardItem.quantity += 1;
            scoreboardItem.score += 10;
        }

        // Propagate changes
        this.setState({scoreboardItems: this.state.scoreboardItems});
    }

    render() {
        return (
            <><GameZone collectableItems={this.state.collectableItems}
                onCollectItem={this.onCollectItem}
                gameName={this.state.gameName}
                gameZoneClassName={this.state.gameZoneClassName}
                logoAltText={this.state.logoAltText}
                logoURL={this.state.logoURL} />
            <Scoreboard scoreboardLang={this.state.scoreboardLang}
                scoreboardItems={this.state.scoreboardItems}
                bonusTotal={this.state.bonusTotal}
                total={this.state.total}
                newGameButton={this.state.newGameButton}
                resetGame={this.state.resetGame} /></>
        );
    }
}