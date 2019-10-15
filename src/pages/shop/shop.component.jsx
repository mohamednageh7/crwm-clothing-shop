import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchcollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';



class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchcollectionsStart} = this.props;

    fetchcollectionsStart();
  }

  render() {
    const { match} = this.props;
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
}



const mapDispatchToProps = dispatch => ({
  fetchcollectionsStart: () => dispatch(fetchcollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
