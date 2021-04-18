declare namespace GameZone {
    interface IGameZoneLang {
        gameName: string;
        logoAltText: string;
    }

    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        onCollectItem: CollectableItem.OnCollectItem;
        lang: IGameZoneLang;
        logoURL: string;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        onCollectItem: CollectableItem.OnCollectItem;
        gameName: string;
        logoAltText: string;
        logoURL: string;
    }
}
