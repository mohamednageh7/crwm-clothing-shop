import {createSelector} from 'reselect';


const shopDataDirectry = state => state.shopDatas;

export const selectShopDataDirectry = createSelector(
    [shopDataDirectry],
    shopDatas => shopDatas.shopData
);

export const selectCollectionForPreview = createSelector(
    [selectShopDataDirectry],
    shopData => Object.keys(shopData).map(key => shopData[key])
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectShopDataDirectry],
    shopData => shopData[collectionUrlParam]
    )