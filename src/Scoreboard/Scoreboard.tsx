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
            newGameButton: props.newGameButton,
            onNewGame: props.onNewGame,
        }
    }

    render() {
        return (
            <><div className="scoreboard">
                <div className="header">{this.state.scoreboardLang.scoreboardHeading}</div>
                <ScoreboardItemList
                    scoreboardItems={this.props.scoreboardItems}
                    lang={this.state.scoreboardLang.scoreboardItemListLang}/>
                <ScoreboardBonusTotalizer
                    bonusTotal={this.props.bonusTotal}
                    lang={this.state.scoreboardLang.scoreboardBonusTotalizerLang} />
                <div className="totalAndNewGameButton">
                    <ScoreboardTotal
                        total={this.props.total}
                        lang={this.state.scoreboardLang.scoreboardTotalLang} />
                    <NewGameButton
                        newGameButton={this.state.newGameButton}
                        onNewGame={this.state.onNewGame} />
                </div>
            </div></>
        );
    }
}