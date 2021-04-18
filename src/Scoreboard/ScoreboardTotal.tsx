import React from 'react';
import './Scoreboard.css';

/**
 * A component for displaying the total score.
 */
export default class ScoreboardTotal extends
React.Component<Scoreboard.IScoreboardTotalProps, Scoreboard.IScoreboardTotalState> {
    constructor(props: Scoreboard.IScoreboardTotalProps) {
        super(props);
        this.state = {
            lang: props.lang,
        }
    }

    render() {
        return (
            <div className="scoreboardTotal">
                <div>{this.state.lang.total}</div>
                <div>{this.props.total}</div>
            </div>
        );
    }
}
