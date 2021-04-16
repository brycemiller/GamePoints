import React from 'react';
import NewGameButton from '../Controls/NewGameButton';
import ScoreboardBonusTotalizer from '../Scoreboard/ScoreboardBonusTotalizer';
import ScoreboardItemList from '../Scoreboard/ScoreboardItemList';
import ScoreboardTotal from '../Scoreboard/ScoreboardTotal';
import './Scoreboard.css';

export default class Scoreboard extends
React.Component<Scoreboard.IScoreboardProps, Scoreboard.IScoreboardState> {
    constructor(props: Scoreboard.IScoreboardProps) {
        super(props);
        this.state = {
            scoreboardLang: props.scoreboardLang,

            scoreboardItems:  props.scoreboardItems,
            bonusTotal: props.bonusTotal,
            total: props.total,

            newGameButton: props.newGameButton,
            resetGame: props.resetGame,
        }
    }

    render() {
        return (
            <><ScoreboardItemList
                scoreboardItems={this.state.scoreboardItems}
                lang={this.state.scoreboardLang.scoreboardItemListLang}/>
            <ScoreboardBonusTotalizer
                bonusTotal={this.state.bonusTotal}
                lang={this.state.scoreboardLang.scoreboardBonusTotalizerLang} />
            <ScoreboardTotal
                total={this.state.total}
                lang={this.state.scoreboardLang.scoreboardTotalLang} />
            <NewGameButton 
                newGameButton={this.state.newGameButton}
                resetGame={this.state.resetGame} /></>
        );
    }
}