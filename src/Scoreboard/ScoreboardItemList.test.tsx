import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardItemList from './ScoreboardItemList';
import { scoreboardItemListLang, scoreboardItems } from '../TestHelpers/testValues';

test('scoreboard header renders', () => {
    render (
        <ScoreboardItemList scoreboardItems={scoreboardItems} lang={scoreboardItemListLang}/>
    );

    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

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
        const scoreboardItemLabel = screen.getByText(scoreboardItem.collectableItem.label);
        expect(scoreboardItemLabel).toBeInTheDocument();

        const scoreboardItemQuantity = screen.getByText(scoreboardItem.quantity);
        expect(scoreboardItemQuantity).toBeInTheDocument();

        const scoreboardItemScore = screen.getByText(scoreboardItem.score);
        expect(scoreboardItemScore).toBeInTheDocument();
    });
});

test('only scoreboard items with quantity > 0 rendered', () => {
    render (
        <ScoreboardItemList scoreboardItems={scoreboardItems} lang={scoreboardItemListLang}/>
    );

    scoreboardItems.map(scoreboardItem => {
        const scoreboardItemLabel = screen.queryByText(scoreboardItem.collectableItem.label);
        const scoreboardItemQuantity = screen.queryByText(scoreboardItem.quantity);
        const scoreboardItemScore = screen.queryByText(scoreboardItem.score);

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
