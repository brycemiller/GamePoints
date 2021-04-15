import React from 'react';
import CollectableItem from './CollectableItem';

const collectableItems: GamePoints.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
  },
];

function App() {
  const collectCollectable = (collectedCollectable: GamePoints.ICollectableItem) => console.log(collectedCollectable);

  return (
    <><CollectableItem
        collectableItem={collectableItems[0]}
        collectCollectable={collectCollectable}/></>
  );
}

export default App;
