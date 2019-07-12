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
    const isAuthenticated  = this.props.isAuthenticated;
    let username;
    let isAdmin;
    let userPage = isAdmin ? ('/adminPage'):('/userPage');
    let userImage;

    if(isAuthenticated){
      const { firstname, user_image } = this.props.user;
        username = firstname.toUpperCase();
        userImage = user_image;
        isAdmin = this.props.user.isAdmin;
    }
    

    const userLinks = (
      <div>
        <img src={userImage} width="50px"/>
        Welcome, {username}
      <ul> 
        <li><i className="fas fa-plus-circle"></i><Link to={userPage}>Dashboard</Link></li> 
        <li><i className="fas fa-plus-circle"></i><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        
      </ul>
      </div>
    );

    const guestLinks = (
      <ul>
        <li><i className="fas fa-home"></i><Link to="/">Home</Link></li>
        <li><i className="fas fa-home"></i><Link to="/login">Login</Link></li>
        <li><i className="fas fa-plus-circle"></i><Link to="/signup">Sign Up</Link></li>
      </ul> 
    );

    return (
          <nav>
            { isAuthenticated ? userLinks : guestLinks }
          </nav>
    );
  }
}


const mapStateToProps = ({authUser}) =>{
  return {
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.user
  };
}

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { logout })(NavigationBar);
