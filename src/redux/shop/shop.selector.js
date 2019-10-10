import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const shopDataDirectry = state => state.shopDatas;

export const selectShopDataDirectry = createSelector(
    [shopDataDirectry],
    shopDatas => shopDatas.shopData
);

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectShopDataDirectry],
    shopData => shopData.find(
        SHOP_DATA => SHOP_DATA.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
)