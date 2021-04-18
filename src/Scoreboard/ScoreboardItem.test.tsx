import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardItem from './ScoreboardItem';
import { scoreboardItems } from '../TestHelpers/testValues';

const collectableItem: CollectableItem.ICollectableItem = scoreboardItems[0].collectableItem;
const quantity: number = scoreboardItems[0].quantity;
const score: number = scoreboardItems[0].score;

test('scoreboard item renders', () => {
    render (
        <table><tbody>
        <ScoreboardItem collectableItem={collectableItem} quantity={quantity} score={score}/>
      </tbody></table>
    );

    const scoreboardItemByCollectableItemId = screen.getByText(collectableItem.label);
    expect(scoreboardItemByCollectableItemId).toBeInTheDocument();

    const scoreboardItemByQuantity = screen.getByText(quantity);
    expect(scoreboardItemByQuantity).toBeInTheDocument();

    const scoreboardItemByScore = screen.getByText(score);
    expect(scoreboardItemByScore).toBeInTheDocument();
});