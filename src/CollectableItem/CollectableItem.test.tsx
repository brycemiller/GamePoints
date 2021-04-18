import { fireEvent, render, screen } from '@testing-library/react';
import { collectableItems } from '../TestHelpers/testSettings';
import CollectableItem from './CollectableItem';

const collectableItem: CollectableItem.ICollectableItem = collectableItems[0];

test('button renders', () => {
    const handleClick = jest.fn();

    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={handleClick} />
    );

    // Ensure collectable item label is rendered
    const collectableItemButton = screen.getByText(collectableItem.label);
    expect(collectableItemButton).toBeInTheDocument();
});

test('button click event is handled using custom function', () => {
    const handleClick = jest.fn();

    render (
        <CollectableItem collectableItem={collectableItem} onCollectItem={handleClick} />
    );

    // Ensure collectable item is present
    const collectableItemButton = screen.getByText(collectableItem.label);
    expect(collectableItemButton).toBeInTheDocument();

    // Click collectable item and ensure handler function has been called
    fireEvent.click(collectableItemButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
});