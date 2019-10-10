import React from 'react';
// import CollectionItem  from '../../components/collection-item/collectionItem.components';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import './collections.style.scss';

const CollectionsPage = ({collection}) => {
    console.log(collection)
    return (
        <div className='collection-page'>
            <h2>CLLECTION PAGE</h2>
        </div>
    )
};

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionsPage);