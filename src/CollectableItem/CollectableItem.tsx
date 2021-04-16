import React from 'react';
import './CollectableItem.css';

export default class CollectableItem extends
React.Component<CollectableItem.ICollectableItemProps, CollectableItem.ICollectableItemState> {
    constructor(props: CollectableItem.ICollectableItemProps) {
        super(props);
        this.state = {
            id:  props.collectableItem.id,
            label: props.collectableItem.label,
            collectCollectable: props.collectCollectable,
        }
    }

    render() {
        return (
            <button onClick={() => this.state.collectCollectable(this.state.id)}>
                {this.state.label}
            </button>
        );
    }
}
