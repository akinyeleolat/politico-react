import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import store from './store';
import Layout from './layout';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';
import './index.css';

const app = document.getElementById('app');

  if(localStorage.jwt){
    setAuthorizationToken(localStorage.jwt);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)));
  }
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={Layout}></Route>
  <Route path='/login' component={Login}></Route>
  <Route path='/signup' component={Signup}></Route>
  <Route path = '/forgotpassword' component={ForgotPassword}></Route>
  </Switch>
  </BrowserRouter>
  </Provider>, app
);
