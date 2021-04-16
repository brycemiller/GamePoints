import React from 'react';
import './ScoreboardItem.css';

export default class ScoreboardItem extends
React.Component<Scoreboard.IScoreboardItemProps, Scoreboard.IScoreboardItemState> {
    constructor(props: Scoreboard.IScoreboardItemProps) {
        super(props);
        this.state = {
            collectableItem: props.collectableItem,
            quantity: props.quantity,
            score: props.score,
        }
    }

    render() {
        return (
            <tr id={"scoreboarditem-" + this.state.collectableItem.id}>
                <td>{this.state.collectableItem.label}</td>
                <td>{this.state.quantity}</td>
                <td>{this.state.score}</td>
            </tr>
        );
    }
}
