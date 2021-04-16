import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardItem from './ScoreboardItem';

const collectableItemId = 'test-id';
const collectableItemLabel = 'test-label';
const collectableItem: CollectableItem.ICollectableItem = {
    id: collectableItemId,
    label: collectableItemLabel,
}

const quantity = 2;
const score = 30;

test('scoreboard item renders', () => {
    render (
        <table><tbody>
        <ScoreboardItem collectableItem={collectableItem} quantity={quantity} score={score}/>
      </tbody></table>
    );

    const scoreboardItemByCollectableItemId = screen.getByText(collectableItemLabel);
    expect(scoreboardItemByCollectableItemId).toBeInTheDocument();

    const scoreboardItemByQuantity = screen.getByText(quantity);
    expect(scoreboardItemByQuantity).toBeInTheDocument();

    const scoreboardItemByScore = screen.getByText(score);
    expect(scoreboardItemByScore).toBeInTheDocument();
});