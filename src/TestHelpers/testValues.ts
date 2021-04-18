export const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: 'A',
        label: 'A',
        color: 'blue',
    },
    {
        id: 'B',
        label: 'B',
        color: 'green',
    },
    {
        id: 'C',
        label: 'C',
        color: 'red',
    },
    {
        id: 'D',
        label: 'D',
        color: 'yellow',
    },
];

export const onCollectItem = () => { return; }

export const gameName = "Points";
export const logoURL = "kahoot-logo.svg";
export const gameZoneLang: GameZone.IGameZoneLang = {
    gameName: "Points",
    logoAltText: "Kahoot!",
}

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

export const scoreboardLang: Scoreboard.IScoreboardLang = {
    scoreboardItemListLang: scoreboardItemListLang,
    scoreboardBonusTotalizerLang: scoreboardBonusTotalizerLang,
    scoreboardTotalLang: scoreboardTotalLang,
    scoreboardHeading: 'Player Items',
}

export const scoreboardItems: Scoreboard.IScoreboardItem[] = [
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

export const scoreboardBonusTotal = 30;
export const scoreboardTotal = 140;

export const newGameButtonId = 'new-button-test-id';
export const newGameButtonLabel = 'new-button-test-label';
export const newGameButton: Controls.INewGameButton = {
    id: newGameButtonId,
    label: newGameButtonLabel,
}

export const onNewGame = () => { return; }
