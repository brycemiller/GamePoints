declare namespace CollectableItem {
    interface ICollectableItem {
        id: string;
        label: string;
    }

    interface ICollectableItemProps {
        collectableItem: ICollectableItem;
        onCollectItem: OnCollectItem;
    }
    
    interface ICollectableItemState {
        id: string;
        label: string;
        onCollectItem: OnCollectItem;
    }

    type OnCollectItem = (collectedItem: Collectable) => void;
}
