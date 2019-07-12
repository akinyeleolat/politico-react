import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';
import { userSignUpRequest } from './../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from './../../actions/flashMessages';

class SignUpRightComponent extends Component {
  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <SignUpForm
          userSignUpRequest={this.props.userSignUpRequest}
          addFlashMessage={this.props.addFlashMessage}
        />
        <p>
          Existing User! <Link to="/login">Sign In</Link>
        </p>
      </div>
    );
  }
}
SignUpRightComponent.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSignUpRequest, addFlashMessage }
)(SignUpRightComponent);
