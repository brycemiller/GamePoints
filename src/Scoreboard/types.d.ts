/**
 * Types for Scoreboard section-related components
 */
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
        lang: IScoreboardItemListLang;
        scoreboardItems: Scoreboard.IScoreboardItem[];
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
        lang: IScoreboardTotalLang;
        total: number;
    }

    interface IScoreboardTotalProps {
        lang: IScoreboardTotalLang;
        total: number;
    }

    interface IScoreboardTotalState {
        lang: IScoreboardTotalLang;
    }

    interface IScoreboardLang {
        scoreboardBonusTotalizerLang: IScoreboardBonusTotalizerLang;
        scoreboardHeading: string;
        scoreboardItemListLang: IScoreboardItemListLang;
        scoreboardTotalLang: IScoreboardTotalLang;
    }

    interface IScoreboardProps {
        bonusTotal: number;
        newGameButton: Controls.INewGameButton;
        onNewGame: Controls.OnNewGame;
        scoreboardLang: IScoreboardLang;
        scoreboardItems: IScoreboardItem[];
        total: number;
    }

    interface IScoreboardState {
        newGameButton: Controls.INewGameButton;
        onNewGame: Controls.OnNewGame;
        scoreboardLang: IScoreboardLang;
    }
}