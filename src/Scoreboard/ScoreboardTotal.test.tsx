import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardTotal from './ScoreboardTotal';

const total = 140;
const scoreboardTotalLang: Scoreboard.IScoreboardTotalLang = {
  total: "Total"
}

test('scoreboard bonus totalizer renders', () => {
    render (
      <ScoreboardTotal total={total} lang={scoreboardTotalLang} />
    );

    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    const scoreboardbonusTotalTotalValue = screen.getByText(total);
    expect(scoreboardbonusTotalTotalValue).toBeInTheDocument();
});