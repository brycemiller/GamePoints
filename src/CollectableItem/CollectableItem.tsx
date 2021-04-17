import React from 'react';
import './CollectableItem.css';

export default class CollectableItem extends
React.Component<CollectableItem.ICollectableItemProps, CollectableItem.ICollectableItemState> {
    constructor(props: CollectableItem.ICollectableItemProps) {
        super(props);
        this.state = {
            id:  props.collectableItem.id,
            label: props.collectableItem.label,
            onCollectItem: props.onCollectItem,
        }
    }

    render() {
        return (
            <button className="collectableItem"
                onClick={() => this.state.onCollectItem(this.props.collectableItem)}>
                {this.state.label}
            </button>
        );
    }
}
