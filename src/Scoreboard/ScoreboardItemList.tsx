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
            <div className="scoreboardItemList"><table>
                <thead>
                    <tr>
                        <th>{this.state.lang.item}</th>
                        <th>{this.state.lang.quantity}</th>
                        <th>{this.state.lang.score}</th>
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
            </table></div>
        );
    }
}