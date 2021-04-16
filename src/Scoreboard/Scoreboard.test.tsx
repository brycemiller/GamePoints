import React from 'react';
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: 'A',
        label: 'A',
    },
    {
        id: 'B',
        label: 'B',
    },
    {
        id: 'C',
        label: 'C',
    },
    {
        id: 'D',
        label: 'D',
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

const bonusTotal = 30;
const scoreboardBonusTotalizerLang: Scoreboard.IScoreboardBonusTotalizerLang = {
    bonus: "Bonus"
}

const total = 140;
const scoreboardTotalLang: Scoreboard.IScoreboardTotalLang = {
    total: "Total"
}

const newGameButton: Controls.INewGameButton = {
    id: "NewGameButton",
    label: "New Game"
}
const resetGame = () => console.log('Resetting game');

const scoreboardLang: Scoreboard.IScoreboardLang = {
    scoreboardItemListLang: scoreboardItemListLang,
    scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
    scoreboardTotalLang: scoreboardTotalLang,
}

test('scoreboard item list renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={bonusTotal}
            total={total}
            newGameButton={newGameButton}
            resetGame={resetGame} />
    );

    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

    const scoreboardItemListScoreHeading = screen.getByText(scoreboardItemListLang.score);
    expect(scoreboardItemListScoreHeading).toBeInTheDocument();
});

test('scoreboard bonus totalizer renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={bonusTotal}
            total={total}
            newGameButton={newGameButton}
            resetGame={resetGame} />
    );

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusTotal = screen.getByText(bonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();
});

test('scoreboard total renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={bonusTotal}
            total={total}
            newGameButton={newGameButton}
            resetGame={resetGame} />
    );

    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    const scoreboardbonusTotalTotalValue = screen.getByText(total);
    expect(scoreboardbonusTotalTotalValue).toBeInTheDocument();
});

test('new game control renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={bonusTotal}
            total={total}
            newGameButton={newGameButton}
            resetGame={resetGame} />
    );

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});
