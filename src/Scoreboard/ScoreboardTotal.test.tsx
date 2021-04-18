import { render, screen } from '@testing-library/react';
import { scoreboardTotal, scoreboardTotalLang } from '../TestHelpers/testSettings';
import ScoreboardTotal from './ScoreboardTotal';

test('scoreboard bonus totalizer renders', () => {
    render (
      <ScoreboardTotal total={scoreboardTotal} lang={scoreboardTotalLang} />
    );

    // Ensure total label is displayed
    const scoreboardTotalLabel = screen.getByText(scoreboardTotalLang.total);
    expect(scoreboardTotalLabel).toBeInTheDocument();

    // Ensure total value is displayed
    const scoreboardTotalValue = screen.getByText(scoreboardTotal);
    expect(scoreboardTotalValue).toBeInTheDocument();
});