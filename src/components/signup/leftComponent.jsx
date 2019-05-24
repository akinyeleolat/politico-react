import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class LeftComponent extends Component{
    render(){
      return (
        <div id="left">
        <div className="pageform">
            <h1>Welcome Back!</h1>
                    Kindly sign in with your information to continue
                    <p><Link to="/login"><button className="button_2">Sign In</button></Link></p>
            </div>
        </div>
      )
    }
   }
   export default LeftComponent;