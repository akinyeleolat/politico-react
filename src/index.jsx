import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import { getAllParty } from './actions/partyActions';
import store from './store';
import Layout from './layout';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';
import Profile from './pages/profile';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './index.css';

const app = document.getElementById('app');

if (localStorage.jwt) {
  setAuthorizationToken(localStorage.jwt);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)));
}

store.dispatch(getAllParty());
toast.configure({
  autoClose: 8000,
  draggable: false,
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  app
);
