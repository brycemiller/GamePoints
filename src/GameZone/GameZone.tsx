import React from 'react';
import CollectableItem from '../CollectableItem/CollectableItem';

export default class GameZone extends
React.Component<GameZone.IGameZoneProps, GameZone.IGameZoneState> {
    constructor(props: GameZone.IGameZoneProps) {
        super(props);
        this.state = {
            collectableItems:  props.collectableItems,
            collectCollectable: props.collectCollectable,
        }
    }

    render() {
        return (
            <div className="GameZone">
                <header><img src={process.env.PUBLIC_URL + '/kahoot-logo.svg'} className="logo" alt="Kahoot!" />Points.</header>
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