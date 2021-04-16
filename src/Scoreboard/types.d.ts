declare namespace Scoreboard {
    interface IScoreboardItem {
        collectableItem: CollectableItem.ICollectableItem;
        quantity: number;
        score: number;
    }

    interface IScoreboardItemProps {
        collectableItem: CollectableItem.ICollectableItem;
        quantity: number;
        score: number;
    }
    
    interface IScoreboardItemState {
        collectableItem: CollectableItem.ICollectableItem;
        quantity: number;
        score: number;
    }

    interface IScoreboardItemListLang {
        item: string;
        quantity: string;
        score: string;
    }

    interface IScoreboardItemList {
        lang: IScoreboardItemListLang;
    }

    interface IScoreboardItemListProps {
        scoreboardItems: Scoreboard.IScoreboardItem[];
        lang: IScoreboardItemListLang;
    }
    
    interface IScoreboardItemListState {
        scoreboardItems: Scoreboard.IScoreboardItem[];
        lang: IScoreboardItemListLang;
    }

    interface IScoreboardBonusTotalizerLang {
        bonus: string;
    }

    interface IScoreboardBonusTotalizer {
        bonusTotal: number;
        lang: IScoreboardBonusTotalizerLang;
    }

    interface IScoreboardBonusTotalizerProps {
        bonusTotal: number;
        lang: IScoreboardBonusTotalizerLang;
    }

    interface IScoreboardBonusTotalizerState {
        bonusTotal: number;
        lang: IScoreboardBonusTotalizerLang;
    }

    interface IScoreboardTotalLang {
        total: string;
    }

    interface IScoreboardTotal {
        total: number;
        lang: IScoreboardTotalLang;
    }

    interface IScoreboardTotalProps {
        total: number;
        lang: IScoreboardTotalLang;
    }

    interface IScoreboardTotalState {
        total: number;
        lang: IScoreboardTotalLang;
    }

    interface IScoreboardLang {
        scoreboardItemListLang: IScoreboardItemListLang,
        scoreboardBonusTotalizerLang: IScoreboardBonusTotalizerLang,
        scoreboardTotalLang: IScoreboardTotalLang,
    }

    interface IScoreboardProps {
        scoreboardLang: IScoreboardLang,

        scoreboardItems: IScoreboardItem[],
        bonusTotal: number,
        total: number,

        newGameButton: Controls.INewGameButton,
        resetGame: Controls.ResetGame,
    }

    interface IScoreboardState {
        scoreboardLang: IScoreboardLang,

        scoreboardItems: IScoreboardItem[],
        bonusTotal: number,
        total: number,

        newGameButton: Controls.INewGameButton,
        resetGame: Controls.ResetGame,
    }
}