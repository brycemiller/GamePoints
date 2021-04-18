import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreboardTotal from './ScoreboardTotal';
import { scoreboardTotal,
  scoreboardTotalLang,
} from '../TestHelpers/testValues';

test('scoreboard bonus totalizer renders', () => {
    render (
      <ScoreboardTotal total={scoreboardTotal} lang={scoreboardTotalLang} />
    );

    const scoreboardbonusTotalTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardbonusTotalTotalLabel).toBeInTheDocument();

    const scoreboardbonusTotalTotalValue = screen.getByText(scoreboardTotal);
    expect(scoreboardbonusTotalTotalValue).toBeInTheDocument();
});