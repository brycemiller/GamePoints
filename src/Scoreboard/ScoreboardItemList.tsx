import React from 'react';
import './Scoreboard.css';
import ScoreboardItem from './ScoreboardItem';

/**
 * A component for displaying a list of items collected in the scoreboard section.
 * The component displays a header, followed by the item name, quantity, and total score
 * of each item, in a table format.
 */
export default class ScoreboardItemList extends
React.Component<Scoreboard.IScoreboardItemListProps, Scoreboard.IScoreboardItemListState> {
    constructor(props: Scoreboard.IScoreboardItemListProps) {
        super(props);
        this.state = {
            lang: props.lang,
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>{this.state.lang.item}</td>
                        <td>{this.state.lang.quantity}</td>
                        <td>{this.state.lang.score}</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.scoreboardItems
                        .filter(scoreboardItem => scoreboardItem.quantity > 0)
                        .map(scoreboardItem => (
                            <ScoreboardItem key={scoreboardItem.collectableItem.id}
                                collectableItem={scoreboardItem.collectableItem}
                                quantity={scoreboardItem.quantity}
                                score={scoreboardItem.score} />
                    ))}
                </tbody>
            </table>
        );
    }
}