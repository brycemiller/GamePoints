import React from 'react';
import './Scoreboard.css';

export default class ScoreboardItem extends
React.Component<Scoreboard.IScoreboardItemProps, Scoreboard.IScoreboardItemState> {
    constructor(props: Scoreboard.IScoreboardItemProps) {
        super(props);
        this.state = {
            collectableItem: props.collectableItem,
        }
    }

    render() {
        return (
            <tr className="scoreboarditem" id={"scoreboarditem-" + this.state.collectableItem.id}>
                <td className="label">
                    <span className={this.state.collectableItem.color}>{this.state.collectableItem.label}</span>
                </td>
                <td>{this.props.quantity}</td>
                <td>{this.props.score}</td>
            </tr>
        );
    }
}
