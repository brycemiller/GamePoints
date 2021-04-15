import React from 'react';
import CollectableItem from './CollectableItem/CollectableItem';

const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
  },
];

function App() {
  const collectCollectable = (collectedCollectable: CollectableItem.ICollectableItem) => console.log(collectedCollectable);

  return (
    <><CollectableItem
        collectableItem={collectableItems[0]}
        collectCollectable={collectCollectable} /></>
  );
}

export default App;
