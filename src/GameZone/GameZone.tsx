import React from 'react';
import CollectableItem from '../CollectableItem/CollectableItem';
import './GameZone.css';

export default class GameZone extends
React.Component<GameZone.IGameZoneProps, GameZone.IGameZoneState> {
    constructor(props: GameZone.IGameZoneProps) {
        super(props);
        this.state = {
            collectableItems:  props.collectableItems,
            collectCollectable: props.collectCollectable,
            gameZoneClassName: props.gameZoneClassName,
            logoAltText: props.logoAltText,
            logoURL: props.logoURL,
        }
    }

    render() {
        return (
            <div className={this.state.gameZoneClassName}>
                <header>
                    <img src={process.env.PUBLIC_URL + '/' + this.state.logoURL}
                        alt={this.state.logoAltText} />
                        Points.
                </header>
                <main>
                    {this.state.collectableItems.map(collectableItem => (
                        <CollectableItem key={collectableItem.id}
                            collectableItem={collectableItem}
                            collectCollectable={this.state.collectCollectable} />
                    ))}
                </main>
            </div>
        );
    }
}