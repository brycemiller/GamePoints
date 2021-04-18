import React from 'react';
import { render, screen } from '@testing-library/react';
import GameZone from './GameZone';
import { collectableItems,
    gameZoneLang,
    logoURL,
    onCollectItem,
} from '../TestHelpers/testValues';

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
            id: 'Z',
            label: 'Z',
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
