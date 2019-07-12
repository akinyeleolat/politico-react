import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import FlashMessagesList from './../../flash/flashMessagesList';
import ValidateInput from './../../validations/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      invalid: false,
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = ValidateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userLoginRequest(this.state).then(
        () => {
          this.setState({ redirect: true });
        },
        error => {
          this.setState({ errors: error.response.data, isLoading: false });
          const { errors } = this.state;
          const displayServerError = errors.error;
          this.props.addFlashMessage({
            type: 'error',
            text: `${displayServerError}`
          });
        }
      );
    }
  }
  render() {
    // return (
    //  <div>
    //  <form onSubmit={this.onSubmit}>
    //     <p><input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required/></p>
    //     <p><input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required/></p>
    //     <p><input type="submit" id="loginBtn" value="Login" className="button_1"/></p>
    //     <p id="responseMsg"></p>
    // </form>
    // </div>
    // )
    const { errors } = this.state;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
            />
            {errors.email && <span className="alerts">{errors.email}</span>}
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
            />
            {errors.password && (
              <span className="alerts">{errors.password}</span>
            )}
          </p>
          <p>
            <input
              type="submit"
              value="Login"
              disabled={this.state.isLoading || this.state.invalid}
              className="button_1"
            />
          </p>
          <div />
        </form>
        <FlashMessagesList />
      </div>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default LoginForm;
