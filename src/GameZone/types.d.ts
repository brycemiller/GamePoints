declare namespace GameZone {
    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        onCollectItem: CollectableItem.OnCollectItem;
        gameName: string;
        gameZoneClassName: string;
        logoAltText: string;
        logoURL: string;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        onCollectItem: CollectableItem.OnCollectItem;
        gameName: string;
        gameZoneClassName: string;
        logoAltText: string;
        logoURL: string;
    }
}
