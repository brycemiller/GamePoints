import React from 'react';
import Game from '../Game/Game';
import CollectableItem from '../CollectableItem/CollectableItem'
import './App.css';

const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
    color: "red",
  },
  {
    id: 'B',
    label: 'B',
    color: "blue",
  },
  {
    id: 'C',
    label: 'C',
    color: "green",
  },
  {
    id: 'D',
    label: 'D',
    color: "yellow",
  },
];

const gameZoneLang: GameZone.IGameZoneLang = {
  gameName: "Points",
  logoAltText: "Kahoot!",
}
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

const scoreboardLang: Scoreboard.IScoreboardLang = {
  scoreboardItemListLang: scoreboardItemListLang,
  scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
  scoreboardTotalLang: scoreboardTotalLang,

  playerItems: "Player Items",
}

function App() {
  return (
    <><Game collectableItems={collectableItems}
        gameZoneLang={gameZoneLang}
        logoURL={logoURL}
        scoreboardLang={scoreboardLang}
        scoreboardItems={scoreboardItems}
        newGameButton={newGameButton} /></>
  );
}

export default App;
