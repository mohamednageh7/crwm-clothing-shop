import React from 'react';
import Collection from '../../components/prevew-collection/preview-collection.component';
import { SHOP_DATA } from './2.2 shop.data.js';


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collection: SHOP_DATA
        }
    }

    handleCollection = () => {
        const collectionData = this.state.collection;
        return collectionData.map(({id, ...otherCollectionProps}) => {
            return <Collection key={id} {...otherCollectionProps} />
        })
    }

    render() {
        return (
            <div>
                <h2>Collections</h2>
                {this.handleCollection()}
            </div>
        )
    }
}

export default ShopPage;