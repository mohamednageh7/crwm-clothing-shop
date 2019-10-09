import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import{createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selecors';
import {toggleCart} from '../../redux/cart/cart.action';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';



const CartDropdown = ({cartItems,history,curentUser,dispatch}) => {

    const handlepageNav = () => {
        history.push('/checkout')
         dispatch(toggleCart())
        // curentUser?
        // history.push('/checkout') : history.push('/signin')
    }
    return ( 
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/>):
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={handlepageNav}>GO TO CHECKOUT</CustomButton>

    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    curentUser :selectCurrentUser
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
