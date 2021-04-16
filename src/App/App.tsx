import React from 'react';
import GameZone from '../GameZone/GameZone';
import Scoreboard from '../Scoreboard/Scoreboard';
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

const collectCollectable =
    (collectedCollectable: CollectableItem.ICollectableItem) => console.log(collectedCollectable);

const gameName = "Points";
const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoURL = "kahoot-logo.svg";

const scoreboardItems: Scoreboard.IScoreboardItem[] = [
  {
    collectableItem: collectableItems[0],
    quantity: 1,
    score: 50
  },
  {
    collectableItem: collectableItems[1],
    quantity: 2,
    score: 90
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

const bonusTotal = 30;
const scoreboardBonusTotalizerLang: Scoreboard.IScoreboardBonusTotalizerLang = {
  bonus: "Bonus"
}

const total = 140;
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
    <><GameZone collectableItems={collectableItems}
        collectCollectable={collectCollectable}
        gameName={gameName}
        gameZoneClassName={gameZoneClassName}
        logoAltText={logoAltText}
        logoURL={logoURL} />
      <Scoreboard scoreboardLang={scoreboardLang}
        scoreboardItems={scoreboardItems}
        bonusTotal={bonusTotal}
        total={total}
        newGameButton={newGameButton}
        resetGame={resetGame} /></>
  );
}

export default App;
