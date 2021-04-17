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
            <tr id={"scoreboarditem-" + this.state.collectableItem.id}>
                <td>{this.state.collectableItem.label}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.score}</td>
            </tr>
        );
    }
}
