/**
 * This file contains all the settings for the App.
 * These value are passed into the Game component by the App.
 */
export const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    color: "red",
    id: 'A',
    label: 'A',
  },
  {
    color: "blue",
    id: 'B',
    label: 'B',
  },
  {
    color: "green",
    id: 'C',
    label: 'C',
  },
  {
    color: "yellow",
    id: 'D',
    label: 'D',
  },
];

export const gameZoneLang: GameZone.IGameZoneLang = {
  gameName: "Points",
  logoAltText: "Kahoot!",
}

export const logoURL = "kahoot-logo.svg";

export const scoreboardItemListLang: Scoreboard.IScoreboardItemListLang = {
  item: "Item",
  quantity: "QTY",
  score: "Score"
}

export const scoreboardBonusTotalizerLang: Scoreboard.IScoreboardBonusTotalizerLang = {
  bonus: "Bonus"
}

export const scoreboardTotalLang: Scoreboard.IScoreboardTotalLang = {
  total: "Total"
}

export const newGameButton: Controls.INewGameButton = {
  id: "NewGameButton",
  label: "New Game"
}

export const scoreboardLang: Scoreboard.IScoreboardLang = {
  scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
  scoreboardHeading: "Player Items",
  scoreboardItemListLang: scoreboardItemListLang,
  scoreboardTotalLang: scoreboardTotalLang,
}
