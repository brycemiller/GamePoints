import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CollectableItem from './CollectableItem';

const collectableItemId = 'test-id';
const collectableItemLabel = 'test-label';
const color = 'red';
const collectableItem: CollectableItem.ICollectableItem = {
    id: collectableItemId,
    label: collectableItemLabel,
    color: color,
}

let collectCollectableCalled: Boolean = false;
const collectCollectable = () => collectCollectableCalled = true;

test('button renders', () => {
    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={collectCollectable} />
    );

    const collectableItemButton = screen.getByText(collectableItemLabel);
    expect(collectableItemButton).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={collectCollectable} />
    );

    const collectableItemButton = screen.getByText(collectableItemLabel);
    expect(collectableItemButton).toBeInTheDocument();

    fireEvent.click(collectableItemButton);
    expect(collectCollectableCalled).toBeTruthy();
});