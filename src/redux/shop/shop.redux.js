import {SHOP_DATA} from '../../pages/shop/shop-data';

const INTIAL_STATE = {
    shopData: SHOP_DATA
};

const shopDataReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default shopDataReducer;