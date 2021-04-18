import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: 'A',
        label: 'A',
        color: 'blue',
    },
    {
        id: 'B',
        label: 'B',
        color: 'green',
    },
    {
        id: 'C',
        label: 'C',
        color: 'red',
    },
    {
        id: 'D',
        label: 'D',
        color: 'yellow',
    },
];

const gameName = "Points";
const logoURL = "kahoot-logo.svg";
const gameZoneLang: GameZone.IGameZoneLang = {
    gameName: "Points",
    logoAltText: "Kahoot!",
}

const scoreboardItemListLang: Scoreboard.IScoreboardItemListLang = {
    item: "Item",
    quantity: "QTY",
    score: "Score"
}

const scoreboardBonusTotalizerLang: Scoreboard.IScoreboardBonusTotalizerLang = {
    bonus: "Bonus"
}

const scoreboardTotalLang: Scoreboard.IScoreboardTotalLang = {
    total: "Total"
}

const newGameButton: Controls.INewGameButton = {
    id: "NewGameButton",
    label: "New Game"
}

const scoreboardLang: Scoreboard.IScoreboardLang = {
    scoreboardItemListLang: scoreboardItemListLang,
    scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
    scoreboardTotalLang: scoreboardTotalLang,
    playerItems: 'Player Items',
}

test('gamezone renders', () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton} />
    );

    const gameZone = screen.getByText(gameName + '.');
    expect(gameZone).toBeInTheDocument();
});

test('scoreboard renders', () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton} />
    );

    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

    const scoreboardItemListScoreHeading = screen.getByText(scoreboardItemListLang.score);
    expect(scoreboardItemListScoreHeading).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalLabel).toBeInTheDocument();

    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});
