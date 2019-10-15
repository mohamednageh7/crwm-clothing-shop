import React,{useEffect} from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchcollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';



const ShopPage = ({fetchcollectionsStart,match}) => {
 
  useEffect(() => {
    fetchcollectionsStart()
  },[fetchcollectionsStart])

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }




const mapDispatchToProps = dispatch => ({
  fetchcollectionsStart: () => dispatch(fetchcollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
