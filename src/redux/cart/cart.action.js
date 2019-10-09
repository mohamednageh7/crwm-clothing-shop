import {cartActionType} from './cart.types';

export const toggleCart= () => ({
    type:cartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type:cartActionType.ADD_ITEM,
    payload:item
});