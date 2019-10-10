import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import Collection from '../prevew-collection/preview-collection.component';
import './collection-overview.style.scss';

const CollectionOverview = ({collections}) => {


    const handleCollection = () => {
        const collectionData = collections;
        return collectionData.map(({id, ...otherCollectionProps}) => {
            return <Collection key={id} {...otherCollectionProps} />
        })
    }

    return (
    <div className='collections-overview'>
    {handleCollection()}
    </div>
    )};

    const mapStateToProps = createStructuredSelector({
        collections:selectCollectionForPreview
    })

    export default connect(mapStateToProps)(CollectionOverview);