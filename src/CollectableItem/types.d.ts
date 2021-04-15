declare namespace CollectableItem {
    interface ICollectableItem {
        id: string;
        label: string;
    }

    interface ICollectableItemProps {
        collectableItem: CollectableItem.ICollectableItem;
        collectCollectable: CollectableItem.CollectCollectable;
    }
    
    interface ICollectableItemState {
        id: string;
        label: string;
        collectCollectable: CollectableItem.CollectCollectable;
    }

    type CollectCollectable = (collectedCollectable: Collectable) => void;
}
