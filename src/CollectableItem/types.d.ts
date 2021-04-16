declare namespace CollectableItem {
    interface ICollectableItem {
        id: string;
        label: string;
    }

    interface ICollectableItemProps {
        collectableItem: ICollectableItem;
        collectCollectable: CollectCollectable;
    }
    
    interface ICollectableItemState {
        id: string;
        label: string;
        collectCollectable: CollectCollectable;
    }

    type CollectCollectable = (collectedCollectable: Collectable) => void;
}
