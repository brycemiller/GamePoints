import React from 'react';
import Game from '../Game/Game';
import './App.css';

const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
  },
  {
    id: 'B',
    label: 'B',
  },
  {
    id: 'C',
    label: 'C',
  },
  {
    id: 'D',
    label: 'D',
  },
];

const gameName = "Points";
const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoURL = "kahoot-logo.svg";

const scoreboardItems: Scoreboard.IScoreboardItem[] = [
  {
    collectableItem: collectableItems[0],
    quantity: 0,
    score: 0
  },
  {
    collectableItem: collectableItems[1],
    quantity: 0,
    score: 0
  },
  {
    collectableItem: collectableItems[2],
    quantity: 0,
    score: 0
  },
  {
    collectableItem: collectableItems[3],
    quantity: 0,
    score: 0
  },
]

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
const resetGame = () => console.log('Resetting game');

const scoreboardLang: Scoreboard.IScoreboardLang = {
  scoreboardItemListLang: scoreboardItemListLang,
  scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
  scoreboardTotalLang: scoreboardTotalLang,
}

function App() {
  return (
    <><Game collectableItems={collectableItems}
        gameName={gameName}
        gameZoneClassName={gameZoneClassName}
        logoAltText={logoAltText}
        logoURL={logoURL}
        scoreboardLang={scoreboardLang}
        scoreboardItems={scoreboardItems}
        newGameButton={newGameButton}
        resetGame={resetGame} /></>
  );
}

export default App;
