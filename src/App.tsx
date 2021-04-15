import React from 'react';
import GameZone from './GameZone/GameZone';

const collectableItems: CollectableItem.ICollectableItem[] = [
  {
    id: 'A',
    label: 'A',
  },
  {
    id: 'B',
    label: 'B',
  },
  {
    id: 'C',
    label: 'C',
  },
  {
    id: 'D',
    label: 'D',
  },
];

const collectCollectable =
    (collectedCollectable: CollectableItem.ICollectableItem) => console.log(collectedCollectable);

function App() {
  return (
    <><GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}/></>
  );
}

export default App;
