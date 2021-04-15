import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GameZone from './GameZone';

const collectableItemId = 'test-id-';
const collectableItemLabel = 'test-label-';
const collectableItems: CollectableItem.ICollectableItem[] = [
    {
        id: collectableItemId+'A',
        label: collectableItemLabel+'A',
    },
    {
        id: collectableItemId+'B',
        label: collectableItemLabel+'B',
    },
    {
        id: collectableItemId+'C',
        label: collectableItemLabel+'C',
    },
    {
        id: collectableItemId+'D',
        label: collectableItemLabel+'D',
    },
];

const collectCollectable = () => { return; }

const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoClassName = "logo";
const logoURL = "kahoot-logo.svg";

test('game zone renders', () => {
    const gameZone = render (
        <GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoClassName={logoClassName} logoURL={logoURL} />
    );

    expect(gameZone.baseElement).toBeInTheDocument();
});

test('all collectable items rendered', async () => {
    render (
        <GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoClassName={logoClassName} logoURL={logoURL} />
    );

    collectableItems.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});

test('one collectable item rendered', async () => {
    const oneCollectableItem: CollectableItem.ICollectableItem[] = [
        {
            id: collectableItemId+'Z',
            label: collectableItemLabel+'Z',
        },
    ];

    render (
        <GameZone collectableItems={oneCollectableItem} collectCollectable={collectCollectable}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoClassName={logoClassName} logoURL={logoURL} />
    );

    oneCollectableItem.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});

test('no collectable items rendered', async () => {
    const noCollectableItems: CollectableItem.ICollectableItem[] = [];

    render (
        <GameZone collectableItems={noCollectableItems} collectCollectable={collectCollectable}
            gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoClassName={logoClassName} logoURL={logoURL} />
    );

    collectableItems.map(collectableItem => {
        const collectableItemButton = screen.queryByText(collectableItem.label);
        expect(collectableItemButton).toBeNull();
    });
});