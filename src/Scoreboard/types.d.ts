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
        lang: Scoreboard.IScoreboardItemListLang;
    }

    interface IScoreboardItemListProps {
        scoreboardItems: Scoreboard.IScoreboardItem[];
        lang: Scoreboard.IScoreboardItemListLang;
    }
    
    interface IScoreboardItemListState {
        scoreboardItems: Scoreboard.IScoreboardItem[];
        lang: Scoreboard.IScoreboardItemListLang;
    }

    interface IScoreboardBonusTotalizerLang {
        bonus: string;
    }

    interface IScoreboardBonusTotalizer {
        bonusTotal: number;
        lang: Scoreboard.IScoreboardBonusTotalizerLang;
    }

    interface IScoreboardBonusTotalizerProps {
        bonusTotal: number;
        lang: Scoreboard.IScoreboardBonusTotalizerLang;
    }

    interface IScoreboardBonusTotalizerState {
        bonusTotal: number;
        lang: Scoreboard.IScoreboardBonusTotalizerLang;
    }
}