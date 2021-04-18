declare namespace GameZone {
    interface IGameZoneLang {
        gameName: string;
        logoAltText: string;
    }

    interface IGameZoneProps {
        collectableItems: CollectableItem.ICollectableItem[];
        lang: IGameZoneLang;
        logoURL: string;
        onCollectItem: CollectableItem.OnCollectItem;
    }
    
    interface IGameZoneState {
        collectableItems: CollectableItem.ICollectableItem[];
        gameName: string;
        logoAltText: string;
        logoURL: string;
        onCollectItem: CollectableItem.OnCollectItem;
    }
}
