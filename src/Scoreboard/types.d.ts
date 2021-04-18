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
    }

    interface IScoreboardItemListLang {
        item: string;
        quantity: string;
        score: string;
    }

    interface IScoreboardItemListProps {
        scoreboardItems: Scoreboard.IScoreboardItem[];
        lang: IScoreboardItemListLang;
    }
    
    interface IScoreboardItemListState {
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
        lang: IScoreboardTotalLang;
    }

    interface IScoreboardLang {
        scoreboardItemListLang: IScoreboardItemListLang,
        scoreboardBonusTotalizerLang: IScoreboardBonusTotalizerLang,
        scoreboardTotalLang: IScoreboardTotalLang,

        scoreboardHeading: string,
    }

    interface IScoreboardProps {
        scoreboardLang: IScoreboardLang,
        scoreboardItems: IScoreboardItem[],
        bonusTotal: number,
        total: number,
        newGameButton: Controls.INewGameButton,
        onNewGame: Controls.OnNewGame,
    }

    interface IScoreboardState {
        scoreboardLang: IScoreboardLang,
        newGameButton: Controls.INewGameButton,
        onNewGame: Controls.OnNewGame,
    }
}