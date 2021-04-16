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
}