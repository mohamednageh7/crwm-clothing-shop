import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from '../src/pages/checkout-page/checkoutpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect';
import{setCurrentUser} from './redux/user/user.action.js';
import {selectCurrentUser} from './redux/user/user.selecors';
import Header from './components/header/header.component'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      const userInfo = await createUserProfileDocument(userAuth);

      userInfo.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
        });
      });
    } else {
      setCurrentUser(userAuth)
    }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={() => 
          this.props.currentUser? (<Redirect to='/' />):(<SignInAndSignUpPage/>)} />
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>
      </BrowserRouter>

    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
