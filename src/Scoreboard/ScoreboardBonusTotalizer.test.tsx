import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardBonusTotalizer from './ScoreboardBonusTotalizer';

const bonusTotal = 30;
const scoreboardBonusTotalizerLang: Scoreboard.IScoreboardBonusTotalizerLang = {
  bonus: "Bonus"
}

test('scoreboard bonus totalizer renders', () => {
    render (
        <ScoreboardBonusTotalizer bonusTotal={bonusTotal} lang={scoreboardBonusTotalizerLang} />
    );

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusTotal = screen.getByText(bonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();
});