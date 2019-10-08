import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../car-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';

const Header = ({currentUser,hidden}) => ( 

  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
          currentUser? <div className='option' onClick={() => auth.signOut()}>sign Out</div>: (<Link className='option' to='/signin'>
          Sign in
        </Link>)
      }
      <CartIcon/>
    </div>
    {hidden?null : <CartDropdown/>}
    
  </div>
);

const mapStateToProps = ({user:{currentUser},cartToggle:{hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);