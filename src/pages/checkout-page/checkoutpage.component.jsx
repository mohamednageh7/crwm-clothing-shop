import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkoutpage.component.scss';

const CheckoutPage = ({cartItems,cost}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantitiy</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
</div>
            {
                cartItems.map( cartItem => (<CheckoutItem key={cartItem.id} cartItem ={cartItem}/>))
            }
            <div className="total">
                <span>Total: ${cost}</span>
            </div>
      
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cost:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);