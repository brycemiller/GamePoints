import React from 'react';
import './Scoreboard.css';

export default class ScoreboardTotal extends
React.Component<Scoreboard.IScoreboardTotalProps, Scoreboard.IScoreboardTotalState> {
    constructor(props: Scoreboard.IScoreboardTotalProps) {
        super(props);
        this.state = {
            total: props.total,
            lang: props.lang,
        }
    }

    render() {
        return (
            <div className="scoreboardTotal">
                <div>{this.state.lang.total}</div>
                <div>{this.state.total}</div>
            </div>
        );
    }
}
