import React from 'react';
import { Route } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import { fetchcollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchcollectionsStartAsync} = this.props;

    fetchcollectionsStartAsync();
  }

  render() {
    const { match,iscollectionFetching,isCollectionLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={iscollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  iscollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded:selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchcollectionsStartAsync: () => dispatch(fetchcollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
