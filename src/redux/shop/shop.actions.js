import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchcollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchcollectionsSuccess = collectionsMap => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
});
export const fetchcollectionsFailure = errorMessage => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
})

export const fetchcollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchcollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchcollectionsSuccess(collectionsMap));
    }).catch((error) => {
        dispatch(fetchcollectionsFailure(error.message))
    })
  }
}