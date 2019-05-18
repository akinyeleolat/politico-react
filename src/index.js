import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Layout from './layout';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';
import './index.scss';

const app = document.getElementById('app');
ReactDOM.render(
  <HashRouter>
  <Route exact path='/' component={Layout}></Route>
  <Route path='/login' component={Login}></Route>
  <Route path='/signup' component={Signup}></Route>
  <Route path = '/forgotpassword' component={ForgotPassword}></Route>
  </HashRouter>, app
);