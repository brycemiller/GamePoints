import { render, screen } from '@testing-library/react';
import { scoreboardItemListLang, scoreboardItems } from '../TestHelpers/testSettings';
import ScoreboardItemList from './ScoreboardItemList';

test('scoreboard header renders', () => {
    render (
        <ScoreboardItemList scoreboardItems={scoreboardItems} lang={scoreboardItemListLang}/>
    );

    // Ensure item label renders
    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    // Ensure quantity label renders
    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

    // Ensure score label renders
    const scoreboardItemListScoreHeading = screen.getByText(scoreboardItemListLang.score);
    expect(scoreboardItemListScoreHeading).toBeInTheDocument();
});

test('one scoreboard item rendered', () => {
    const oneScoreboardItem: Scoreboard.IScoreboardItem[] =
    [
        {
            collectableItem: {
                id: 'Z',
                label: 'Z',
                color: 'yellow',
            },
            quantity: 2,
            score: 30
        }
    ];

    render (
        <ScoreboardItemList scoreboardItems={oneScoreboardItem} lang={scoreboardItemListLang}/>
    );

    oneScoreboardItem.map(scoreboardItem => {
        // Ensure scoreboard item label is rendered
        const scoreboardItemLabel = screen.getByText(scoreboardItem.collectableItem.label);
        expect(scoreboardItemLabel).toBeInTheDocument();

        // Ensure scoreboard item quantity is rendered
        const scoreboardItemQuantity = screen.getByText(scoreboardItem.quantity);
        expect(scoreboardItemQuantity).toBeInTheDocument();

        // Ensure scoreboard item score is rendered
        const scoreboardItemScore = screen.getByText(scoreboardItem.score);
        expect(scoreboardItemScore).toBeInTheDocument();
    });
});

test('only scoreboard items with quantity > 0 rendered', () => {
    render (
        <ScoreboardItemList scoreboardItems={scoreboardItems} lang={scoreboardItemListLang}/>
    );

    // Check each scoreboard item
    scoreboardItems.map(scoreboardItem => {
        // Try to get label, quantity, and score for scoreboard item
        const scoreboardItemLabel = screen.queryByText(scoreboardItem.collectableItem.label);
        const scoreboardItemQuantity = screen.queryByText(scoreboardItem.quantity);
        const scoreboardItemScore = screen.queryByText(scoreboardItem.score);

        // Ensure only items that have been collected at least once are rendered
        if (scoreboardItem.quantity > 0) {
            expect(scoreboardItemLabel).toBeInTheDocument();
            expect(scoreboardItemQuantity).toBeInTheDocument();
            expect(scoreboardItemScore).toBeInTheDocument();
        } else {
            expect(scoreboardItemLabel).toBeNull();
            expect(scoreboardItemQuantity).toBeNull();
            expect(scoreboardItemScore).toBeNull();
        }
    });
});
