import React from 'react';
import CollectableItem from '../CollectableItem/CollectableItem';
import './GameZone.css';

/**
 * A class for rendering the GameZone where a header, and the collectable
 * items are displayed.
 */
export default class GameZone extends
React.Component<GameZone.IGameZoneProps, GameZone.IGameZoneState> {
    constructor(props: GameZone.IGameZoneProps) {
        super(props);
        this.state = {
            collectableItems:  props.collectableItems,
            gameName: props.lang.gameName,
            logoAltText: props.lang.logoAltText,
            logoURL: props.logoURL,
            onCollectItem: props.onCollectItem,
        }
    }

    render() {
        return (
            <div className="gameZone">
                <header>
                    <img src={process.env.PUBLIC_URL + '/' + this.state.logoURL}
                        alt={this.state.logoAltText} />
                        {this.state.gameName}.
                </header>
                <main>
                    {this.state.collectableItems.map(collectableItem => (
                        <CollectableItem key={collectableItem.id}
                            collectableItem={collectableItem}
                            onCollectItem={this.state.onCollectItem} />
                    ))}
                </main>
            </div>
        );
    }
}