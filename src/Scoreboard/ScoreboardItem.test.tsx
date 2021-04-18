import { render, screen } from '@testing-library/react';
import { scoreboardItems } from '../TestHelpers/testSettings';
import ScoreboardItem from './ScoreboardItem';

// Assign variables used in test for convenience
const collectableItem: CollectableItem.ICollectableItem = scoreboardItems[0].collectableItem;
const quantity: number = scoreboardItems[0].quantity;
const score: number = scoreboardItems[0].score;

test('scoreboard item renders', () => {
    render (
        <table><tbody>
        <ScoreboardItem collectableItem={collectableItem} quantity={quantity} score={score}/>
      </tbody></table>
    );

    // Ensure item label is rendered
    const scoreboardItemByCollectableItemId = screen.getByText(collectableItem.label);
    expect(scoreboardItemByCollectableItemId).toBeInTheDocument();

    // Ensure item quantity is rendered
    const scoreboardItemByQuantity = screen.getByText(quantity);
    expect(scoreboardItemByQuantity).toBeInTheDocument();

    // Ensure item score is rendered
    const scoreboardItemByScore = screen.getByText(score);
    expect(scoreboardItemByScore).toBeInTheDocument();
});