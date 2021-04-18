import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CollectableItem from './CollectableItem';
import { collectableItems } from '../TestHelpers/testValues';

const collectableItem: CollectableItem.ICollectableItem = collectableItems[0];

test('button renders', () => {
    const handleClick = jest.fn();

    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={handleClick} />
    );

    const collectableItemButton = screen.getByText(collectableItem.label);
    expect(collectableItemButton).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    const handleClick = jest.fn();

    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={handleClick} />
    );

    const collectableItemButton = screen.getByText(collectableItem.label);
    expect(collectableItemButton).toBeInTheDocument();

    fireEvent.click(collectableItemButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
});