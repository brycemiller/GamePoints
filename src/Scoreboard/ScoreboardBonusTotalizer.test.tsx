import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardBonusTotalizer from './ScoreboardBonusTotalizer';
import { scoreboardBonusTotal, scoreboardBonusTotalizerLang } from '../TestHelpers/testValues';

test('scoreboard bonus totalizer renders', () => {
    render (
        <ScoreboardBonusTotalizer bonusTotal={scoreboardBonusTotal} lang={scoreboardBonusTotalizerLang} />
    );

    const scoreboardbonusTotalizerBonusLabel = screen.getByText(scoreboardBonusTotalizerLang.bonus);
    expect(scoreboardbonusTotalizerBonusLabel).toBeInTheDocument();

    const scoreboardbonusTotalizerBonusTotal = screen.getByText(scoreboardBonusTotal);
    expect(scoreboardbonusTotalizerBonusTotal).toBeInTheDocument();
});