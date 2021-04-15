declare namespace GameZone {
    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
    }
}
