import React from 'react';
import Game from '../Game/Game';
import POINTS_SCHEME from '../pointsScheme.json';
import { collectableItems,
  gameZoneLang,
  logoURL,
  newGameButton,
  scoreboardLang,
} from '../settings';
import './App.css';

function App() {
  return (
    <><Game collectableItems={collectableItems}
        gameZoneLang={gameZoneLang}
        logoURL={logoURL}
        scoreboardLang={scoreboardLang}
        newGameButton={newGameButton}
        pointsScheme={POINTS_SCHEME} /></>
  );
}

export default App;
