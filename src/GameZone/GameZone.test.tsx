import React from 'react';
import { render, screen } from '@testing-library/react';
import GameZone from './GameZone';

const collectableItemId = 'test-id-';
const collectableItemLabel = 'test-label-';
const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: collectableItemId+'A',
        label: collectableItemLabel+'A',
        color: 'blue',
    },
    {
        id: collectableItemId+'B',
        label: collectableItemLabel+'B',
        color: 'green',
    },
    {
        id: collectableItemId+'C',
        label: collectableItemLabel+'C',
        color: 'red',
    },
    {
        id: collectableItemId+'D',
        label: collectableItemLabel+'D',
        color: 'yellow',
    },
];

const onCollectItem = () => { return; }

const logoURL = "kahoot-logo.svg";
const gameZoneLang: GameZone.IGameZoneLang = {
    gameName: "Points",
    logoAltText: "Kahoot!",
}

test('game zone renders', () => {
    render (
        <GameZone collectableItems={collectableItems}
            onCollectItem={onCollectItem}
            lang={gameZoneLang}
            logoURL={logoURL} />
    );

    const gameZone = screen.getByText(gameZoneLang.gameName + '.');
    expect(gameZone).toBeInTheDocument();
});

test('all collectable items rendered', () => {
    render (
        <GameZone collectableItems={collectableItems}
            onCollectItem={onCollectItem}
            lang={gameZoneLang}
            logoURL={logoURL} />
    );

    collectableItems.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});

test('one collectable item rendered', () => {
    const oneCollectableItem: CollectableItem.ICollectableItem[] = [
        {
            id: collectableItemId+'Z',
            label: collectableItemLabel+'Z',
            color: 'yellow',
        },
    ];

    render (
        <GameZone collectableItems={oneCollectableItem}
            onCollectItem={onCollectItem}
            lang={gameZoneLang}
            logoURL={logoURL} />
    );

    oneCollectableItem.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});
