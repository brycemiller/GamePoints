import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

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

const collectCollectable =
    (collectedCollectable: CollectableItem.ICollectableItem) => console.log(collectedCollectable);

const gameName = "Points";
const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoURL = "kahoot-logo.svg";

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

test('gamezone renders', () => {
    render (
        <Game collectableItems={collectableItems}
            collectCollectable={collectCollectable}
            gameName={gameName}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={bonusTotal}
            total={total}
            newGameButton={newGameButton}
            resetGame={resetGame} />
    );

    const gameZone = screen.getByText(gameName + '.');
    expect(gameZone).toBeInTheDocument();
});

test('scoreboard renders', () => {
    render (
        <Game collectableItems={collectableItems}
            collectCollectable={collectCollectable}
            gameName={gameName}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
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

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusTotal = screen.getByText(bonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();

    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    const scoreboardbonusTotalTotalValue = screen.getByText(total);
    expect(scoreboardbonusTotalTotalValue).toBeInTheDocument();

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});