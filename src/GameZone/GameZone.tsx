import React from 'react';
import CollectableItem from '../CollectableItem/CollectableItem';

const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
  },
];

const collectCollectable =
    (collectedCollectable: CollectableItem.ICollectableItem) => console.log(collectedCollectable);

export default class GameZone extends React.Component {
    render() {
        return (
            <div className="GameZone">
                <header><img src={process.env.PUBLIC_URL + '/kahoot-logo.svg'} className="logo" alt="Kahoot!" />Points.</header>
                <main>
                    <CollectableItem
                        collectableItem={collectableItems[0]}
                        collectCollectable={collectCollectable} />
                </main>
            </div>
        );
    }
}