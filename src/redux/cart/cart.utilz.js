export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartIten = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartIten) {
        return cartItems.map( cartItem => ({...cartItem,
            quantity:cartItem.quantity + 1})
        )
    }
        return [...cartItems, {...cartItemToAdd, quantity:1}]
    
}