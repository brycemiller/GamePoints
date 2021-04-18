import { render, screen } from '@testing-library/react';
import {
    collectableItems,
    gameZoneLang,
    logoURL,
    onCollectItem
} from '../TestHelpers/testSettings';
import GameZone from './GameZone';

test('game zone renders', () => {
    render (
        <GameZone collectableItems={collectableItems}
            onCollectItem={onCollectItem}
            lang={gameZoneLang}
            logoURL={logoURL} />
    );

    // Ensure game name label is rendered
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

    // Ensure the label for each collectable item is rendered
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

    // Ensure the label for the collectable item is rendered
    oneCollectableItem.map(collectableItem => {
        const collectableItemButton = screen.getByText(collectableItem.label);
        expect(collectableItemButton).toBeInTheDocument();
    });
});
