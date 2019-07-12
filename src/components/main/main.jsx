import React,{ Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showcase from './showcase';
import Newsletter from './newsletter';
import Boxes from './boxes';
import './main.css';

class Main extends Component{
    render(){
      const isAuthenticated  = this.props.isAuthenticated;

      const guestLayout = (
        <Fragment>
        <Showcase/>
        <Newsletter/>
        <Boxes/>
        </Fragment>
      )

      const userLayout =(
        <Fragment>
        <Newsletter/>
        <Boxes/>
        </Fragment>
      )
        
      return (
        <div className='main'>
        { isAuthenticated ? userLayout : guestLayout }
        </div>
      )
    }
   }

  const mapStateToProps = ({authUser}) =>{
    return {
      isAuthenticated: authUser.isAuthenticated,
    };
  }
  
 Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  }
  
  export default connect(mapStateToProps, null)(Main);
  
   