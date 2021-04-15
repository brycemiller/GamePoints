declare namespace GamePoints {
    interface ICollectableItem {
        id: string;
        label: string;
    }

    interface ICollectableItemProps {
        collectableItem: GamePoints.ICollectableItem;
        collectCollectable: GamePoints.CollectCollectable;
    }
    
    interface ICollectableItemState {
        id: string;
        label: string;
        collectCollectable: GamePoints.CollectCollectable;
    }

    type CollectCollectable = (collectedCollectable: Collectable) => void;
}
