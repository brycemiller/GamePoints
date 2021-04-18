import { render, screen } from '@testing-library/react';
import {
    newGameButton,
    onNewGame,
    scoreboardBonusTotal,
    scoreboardBonusTotalizerLang, scoreboardItemListLang,
    scoreboardItems,
    scoreboardLang,
    scoreboardTotal,
    scoreboardTotalLang
} from '../TestHelpers/testSettings';
import Scoreboard from './Scoreboard';

test('scoreboard header renders', () => {
    render (
        <Scoreboard scoreboardLang={scoreboardLang}
            scoreboardItems={scoreboardItems}
            bonusTotal={scoreboardBonusTotal}
            total={scoreboardTotal}
            newGameButton={newGameButton}
            onNewGame={onNewGame} />
    );

    // Ensure heading label is rendered
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

    // Ensure item heading is rendered
    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    // Ensure quantity heading is rendered
    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

    // Ensure score heading is rendered
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

    // Ensure bonus label is rendered
    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    // Ensure bonus value is rendered
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

    // Ensure total label is rendered
    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    // Ensure total value is rendered
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

    // Ensure new game button label is rendered
    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});
