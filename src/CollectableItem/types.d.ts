declare namespace CollectableItem {
    interface ICollectableItem {
        color: Color;
        id: string;
        label: string;
    }

    interface ICollectableItemProps {
        collectableItem: ICollectableItem;
        onCollectItem: OnCollectItem;
    }
    
    interface ICollectableItemState {
        color: Color;
        id: string;
        label: string;
        onCollectItem: OnCollectItem;
    }

    type Color = "blue" | "green" | "red" | "yellow";
    type OnCollectItem = (collectedItem: Collectable) => void;
}
