declare namespace GameZone {
    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
        gameName: string;
        gameZoneClassName: string;
        logoAltText: string;
        logoURL: string;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        collectCollectable: CollectableItem.CollectCollectable;
        gameName: string;
        gameZoneClassName: string;
        logoAltText: string;
        logoURL: string;
    }
}
