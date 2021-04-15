declare namespace GameZone {
    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
        gameZoneClassName: string;
        logoAltText: string;
        logoClassName: string;
        logoURL: string;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
        gameZoneClassName: string;
        logoAltText: string;
        logoClassName: string;
        logoURL: string;
    }
}
