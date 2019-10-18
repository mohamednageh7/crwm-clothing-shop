import React,{useEffect,lazy,Suspense} from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchcollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collection-overview.container'))
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))


const ShopPage = ({fetchcollectionsStart,match}) => {
 
  useEffect(() => {
    fetchcollectionsStart()
  },[fetchcollectionsStart])

    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        </Suspense>
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
