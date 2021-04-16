import React from 'react';
import GameZone from './GameZone/GameZone';
import ScoreboardItem from './Scoreboard/ScoreboardItem';

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

const gameName = "Points";
const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoURL = "kahoot-logo.svg";

function App() {
  return (
    <><GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}
        gameName={gameName} gameZoneClassName={gameZoneClassName}
        logoAltText={logoAltText} logoURL={logoURL} />
      <table><tbody>
        <ScoreboardItem collectableItem={collectableItems[1]} quantity={2} score={30}/>
      </tbody></table></>
  );
}

export default App;
