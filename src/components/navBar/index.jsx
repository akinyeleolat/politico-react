import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from './../../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const isAuthenticated = this.props.isAuthenticated;
    let isAdmin;

    if (isAuthenticated) {
      isAdmin = this.props.user.isAdmin;
    }

    const userLinks = (
      <ul>
        <li>
          {isAdmin && (
            <Link to={'/admin'}>
              <i className="fas fa-plus-circle" />Admin Dashboard
            </Link>
          )}
        </li>
        <li>
          <i className="fas fa-plus-circle" />
          <Link to="/profile">View Profile</Link>
        </li>
        <li>
          <i className="fas fa-sign-out-alt" />
          <a href="#" onClick={this.logout.bind(this)}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <i className="fas fa-home" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="fas fa-home" />
          <Link to="/login">Login</Link>
        </li>
        <li>
          <i className="fas fa-plus-circle" />
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    );

    return <nav>{isAuthenticated ? userLinks : guestLinks}</nav>;
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.user
  };
};

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);
