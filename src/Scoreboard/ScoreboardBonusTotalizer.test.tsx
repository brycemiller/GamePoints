import { render, screen } from '@testing-library/react';
import { scoreboardBonusTotal, scoreboardBonusTotalizerLang } from '../TestHelpers/testSettings';
import ScoreboardBonusTotalizer from './ScoreboardBonusTotalizer';

test('scoreboard bonus totalizer renders', () => {
    render (
        <ScoreboardBonusTotalizer bonusTotal={scoreboardBonusTotal} lang={scoreboardBonusTotalizerLang} />
    );

    // Ensure bonus label is rendered
    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    // Ensure bonus value is rendered
    const scoreboardbonusTotalizerBonusTotal = screen.getByText(scoreboardBonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();
});