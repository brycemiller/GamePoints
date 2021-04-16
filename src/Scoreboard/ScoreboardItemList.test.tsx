import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ScoreboardItemList from './ScoreboardItemList';

const collectableItemId = 'test-id-';
const collectableItemLabel = 'test-label-';
const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: collectableItemId+'A',
        label: collectableItemLabel+'A',
    },
    {
        id: collectableItemId+'B',
        label: collectableItemLabel+'B',
    },
    {
        id: collectableItemId+'C',
        label: collectableItemLabel+'C',
    },
    {
        id: collectableItemId+'D',
        label: collectableItemLabel+'D',
    },
];

const scoreboardItems: Scoreboard.IScoreboardItem[] = [
    {
        collectableItem: collectableItems[0],
        quantity: 1,
        score: 50
    },
    {
        collectableItem: collectableItems[1],
        quantity: 2,
        score: 90
    },
    {
        collectableItem: collectableItems[2],
        quantity: 0,
        score: 0
    },
    {
        collectableItem: collectableItems[3],
        quantity: 0,
        score: 0
    },
]

const scoreboardItemListLang: Scoreboard.IScoreboardItemListLang = {
    item: "Item",
    quantity: "QTY",
    score: "Score"
}

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
                id: collectableItemId+'Z',
                label: collectableItemLabel+'Z',
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
