export const collectableItems: CollectableItem.ICollectableItem[] = [
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
  scoreboardItemListLang: scoreboardItemListLang,
  scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
  scoreboardTotalLang: scoreboardTotalLang,

  scoreboardHeading: "Player Items",
}
