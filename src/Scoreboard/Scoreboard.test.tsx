import React from 'react';
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';
import { newGameButton,
    onNewGame,
    scoreboardItemListLang,
    scoreboardItems,
    scoreboardLang,
    scoreboardBonusTotal,
    scoreboardBonusTotalizerLang,
    scoreboardTotal,
    scoreboardTotalLang,
} from '../TestHelpers/testValues';

test('scoreboard header renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
    );

    const scoreboardHeading = screen.getByText(scoreboardLang.scoreboardHeading);
    expect(scoreboardHeading).toBeInTheDocument();
});

test('scoreboard item list renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
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
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
    );

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusTotal = screen.getByText(scoreboardBonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();
});

test('scoreboard total renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
    );

    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    const scoreboardbonusTotalTotalValue = screen.getByText(scoreboardTotal);
    expect(scoreboardbonusTotalTotalValue).toBeInTheDocument();
});

test('new game control renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
    );

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});
