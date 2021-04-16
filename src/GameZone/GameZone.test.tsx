import React from 'react';
import { render, screen } from '@testing-library/react';
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

const gameName = "Points";
const gameZoneClassName = "gameZone";
const logoAltText = "Kahoot!";
const logoURL = "kahoot-logo.svg";

test('game zone renders', () => {
    render (
        <GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}
            gameName={gameName} gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoURL={logoURL} />
    );

    const gameZone = screen.getByText(gameName + '.');
    expect(gameZone).toBeInTheDocument();
});

test('all collectable items rendered', () => {
    render (
        <GameZone collectableItems={collectableItems} collectCollectable={collectCollectable}
            gameName={gameName} gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoURL={logoURL} />
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
        },
    ];

    render (
        <GameZone collectableItems={oneCollectableItem} collectCollectable={collectCollectable}
            gameName={gameName} gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoURL={logoURL} />
    );

    oneCollectableItem.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});

test('no collectable items rendered', () => {
    const noCollectableItems: CollectableItem.ICollectableItem[] = [];

    render (
        <GameZone collectableItems={noCollectableItems} collectCollectable={collectCollectable}
            gameName={gameName} gameZoneClassName={gameZoneClassName}
            logoAltText={logoAltText} logoURL={logoURL} />
    );

    collectableItems.map(collectableItem => {
        const collectableItemButton = screen.queryByText(collectableItem.label);
        expect(collectableItemButton).toBeNull();
    });
});