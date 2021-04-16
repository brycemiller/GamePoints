import React from 'react';
import './Scoreboard.css';

export default class ScoreboardBonusTotalizer extends
React.Component<Scoreboard.IScoreboardBonusTotalizerProps, Scoreboard.IScoreboardBonusTotalizerState> {
    constructor(props: Scoreboard.IScoreboardBonusTotalizerProps) {
        super(props);
        this.state = {
            bonusTotal: props.bonusTotal,
            lang: props.lang,
        }
    }

    render() {
        return (
            <div className="scoreboardBonusTotalizer">
                <span>{this.state.lang.bonus}</span>
                <span>{this.state.bonusTotal}</span>
            </div>
        );
    }
}
