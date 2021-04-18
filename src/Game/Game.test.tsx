import { fireEvent, render, screen } from '@testing-library/react';
import POINTS_SCHEME from '../TestHelpers/pointsScheme.json';
import { getByTextWithMarkup } from '../TestHelpers/testHelpers';
import {
    collectableItems,
    gameName,
    gameZoneLang,
    logoURL,
    newGameButton,
    scoreboardBonusTotalizerLang, scoreboardItemListLang,
    scoreboardLang,
    scoreboardTotalLang
} from '../TestHelpers/testSettings';
import Game from './Game';

test('gamezone renders', () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton}
            pointsScheme={POINTS_SCHEME} />
    );

    // Ensure game name label is rendered
    const gameZone = screen.getByText(gameName + '.');
    expect(gameZone).toBeInTheDocument();
});

test('scoreboard renders', () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton}
            pointsScheme={POINTS_SCHEME} />
    );

    // Ensure scoreboard item heading is rendered
    const scoreboardItemListItemHeading = screen.getByText(scoreboardItemListLang.item);
    expect(scoreboardItemListItemHeading).toBeInTheDocument();

    // Ensure scoreboard quntity heading is rendered
    const scoreboardItemListQuantityHeading = screen.getByText(scoreboardItemListLang.quantity);
    expect(scoreboardItemListQuantityHeading).toBeInTheDocument();

    // Ensure scoreboard score heading is rendered
    const scoreboardItemListScoreHeading = screen.getByText(scoreboardItemListLang.score);
    expect(scoreboardItemListScoreHeading).toBeInTheDocument();

    // Ensure scoreboard bonus label is rendered
    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    // Ensure scoreboard total label is rendered
    const scoreboardbonusTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalLabel).toBeInTheDocument();

    // Ensure new game button is rendered
    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();
});

test('clicking on collectable item makes it appear in scoreboard', async () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton}
            pointsScheme={POINTS_SCHEME} />
    );

    // Click on collectable item A
    const collectableItemButtonA = screen.getByText(collectableItems[0].label);
    expect(collectableItemButtonA).toBeInTheDocument();
    fireEvent.click(collectableItemButtonA);

    // Ensure A appears in scoreboard
    await screen.findByText(getByTextWithMarkup(
        collectableItems[0].label + '1' + POINTS_SCHEME[0].unitPoints));

    // Click on collectable item B
    const collectableItemButtonB = screen.getByText(collectableItems[1].label);
    expect(collectableItemButtonB).toBeInTheDocument();
    fireEvent.click(collectableItemButtonB);

    // Ensure B appears in scoreboard
    await screen.findByText(getByTextWithMarkup(
        collectableItems[1].label + '1' + POINTS_SCHEME[1].unitPoints));

    // Click on collectable item C
    const collectableItemButtonC = screen.getByText(collectableItems[2].label);
    expect(collectableItemButtonC).toBeInTheDocument();
    fireEvent.click(collectableItemButtonC);

    // Ensure C appears in scoreboard
    await screen.findByText(getByTextWithMarkup(
        collectableItems[2].label + '1' + POINTS_SCHEME[2].unitPoints));

    // Click on collectable item D
    const collectableItemButtonD = screen.getByText(collectableItems[3].label);
    expect(collectableItemButtonD).toBeInTheDocument();
    fireEvent.click(collectableItemButtonD);

    // Ensure D appears in scoreboard
    await screen.findByText(getByTextWithMarkup(
        collectableItems[3].label + '1' + POINTS_SCHEME[3].unitPoints));
});

test('new game button click resets values', async () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton}
            pointsScheme={POINTS_SCHEME} />
    );

    // Click on some collectable items
    const collectableItemButtonA = screen.getByText(collectableItems[0].label);
    expect(collectableItemButtonA).toBeInTheDocument();
    fireEvent.click(collectableItemButtonA);

    const collectableItemButtonB = screen.getByText(collectableItems[1].label);
    expect(collectableItemButtonB).toBeInTheDocument();
    fireEvent.click(collectableItemButtonB);
    fireEvent.click(collectableItemButtonB);

    const collectableItemButtonC = screen.getByText(collectableItems[2].label);
    expect(collectableItemButtonC).toBeInTheDocument();
    fireEvent.click(collectableItemButtonC);

    const collectableItemButtonD = screen.getByText(collectableItems[3].label);
    expect(collectableItemButtonD).toBeInTheDocument();
    fireEvent.click(collectableItemButtonD);

    // Ensure bonus and total are not 0 (i.e., we have been collecting points)
    const bonus = screen.queryByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '0'));
    expect(bonus).toBeFalsy();

    const total = screen.queryByText(getByTextWithMarkup(scoreboardTotalLang.total + '0'));
    expect(total).toBeFalsy();

    // Click new game button
    const button = screen.getByText(newGameButton.label);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    // Ensure bonus and total are both reset to 0
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '0'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '0'));
});

test('bonus and total display correct values', async () => {
    render (
        <Game collectableItems={collectableItems}
            gameZoneLang={gameZoneLang}
            logoURL={logoURL}
            scoreboardLang={scoreboardLang}
            newGameButton={newGameButton}
            pointsScheme={POINTS_SCHEME} />
    );

    // Click on some collectable items // total, bonus

    // Click button A, with unit value 50 and bonus 200 for 3
    const collectableItemButtonA = screen.getByText(collectableItems[0].label);
    expect(collectableItemButtonA).toBeInTheDocument();

    fireEvent.click(collectableItemButtonA); // 50, 0

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '0'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '50'));

    fireEvent.click(collectableItemButtonA); // 100, 0

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '0'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '100'));

    fireEvent.click(collectableItemButtonA); // 200, 50

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '50'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '200'));

    // Click button B, with unit value 30 and bonus 90 for 2
    const collectableItemButtonB = screen.getByText(collectableItems[1].label);
    expect(collectableItemButtonB).toBeInTheDocument();

    fireEvent.click(collectableItemButtonB); // 230, 50

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '50'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '230'));

    fireEvent.click(collectableItemButtonB); // 290, 80

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '80'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '290'));

    // Click button C, with unit value 20 and no bonus
    const collectableItemButtonC = screen.getByText(collectableItems[2].label);
    expect(collectableItemButtonC).toBeInTheDocument();
    fireEvent.click(collectableItemButtonC); // 310, 80
    fireEvent.click(collectableItemButtonC); // 330, 80
    fireEvent.click(collectableItemButtonC); // 350, 80
    fireEvent.click(collectableItemButtonC); // 370, 80

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '80'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '370'));

    // Click button D, with unit value 15 and no bonus
    const collectableItemButtonD = screen.getByText(collectableItems[3].label);
    expect(collectableItemButtonD).toBeInTheDocument();
    fireEvent.click(collectableItemButtonD); // 385, 80

    // Ensure correct values for bonus and total
    await screen.findByText(getByTextWithMarkup(scoreboardBonusTotalizerLang.bonus + '80'));
    await screen.findByText(getByTextWithMarkup(scoreboardTotalLang.total + '385'));
});