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
            collectCollectable: props.collectCollectable,

            gameName: props.gameName,
            gameZoneClassName: props.gameZoneClassName,
            logoAltText: props.logoAltText,
            logoURL: props.logoURL,

            scoreboardLang: props.scoreboardLang,

            scoreboardItems: props.scoreboardItems,
            bonusTotal: props.bonusTotal,
            total: props.total,
            
            newGameButton: props.newGameButton,
            resetGame: props.resetGame,
        }
    }

    render() {
        return (
            <><GameZone collectableItems={this.state.collectableItems}
                collectCollectable={this.state.collectCollectable}
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