declare namespace CollectableItem {
    interface ICollectableItem {
        id: string;
        label: string;
        color: Color;
    }

    interface ICollectableItemProps {
        collectableItem: ICollectableItem;
        onCollectItem: OnCollectItem;
    }
    
    interface ICollectableItemState {
        id: string;
        label: string;
        color: Color;
        onCollectItem: OnCollectItem;
    }

    type OnCollectItem = (collectedItem: Collectable) => void;
    type Color = "blue" | "green" | "red" | "yellow";
}
