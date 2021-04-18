import React from 'react';
import './CollectableItem.css';

/**
 * A class for rendering a collectable item.
 */
export default class CollectableItem extends
React.Component<CollectableItem.ICollectableItemProps, CollectableItem.ICollectableItemState> {
    constructor(props: CollectableItem.ICollectableItemProps) {
        super(props);
        this.state = {
            color: props.collectableItem.color,
            id:  props.collectableItem.id,
            label: props.collectableItem.label,
            onCollectItem: props.onCollectItem,
        }
    }

    render() {
        return (
            <button className={"collectableItem " + this.state.color}
                onClick={() => this.state.onCollectItem(this.props.collectableItem)}>
                {this.state.label}
            </button>
        );
    }
}
