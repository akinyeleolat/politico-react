import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class RightComponent extends Component{
    render(){
      return (
        <div id="right">
                <div className="pageform">
                <form id="loginForm">
                <img src="./img/thumb2.jpg" width="100px"/>
                <h1>Forgot Password</h1>
                <p><input type="email" placeholder="Email" required/></p>
                <p><input type="submit" value="Reset Password" className="button_1"/></p>
                <p id="responseMsg"></p>
                <div>
                <p className="alignTxtRight">
                <Link to="/"><i className="fas fa-home"></i> HOME</Link> | 
                <Link to="/signup">CREATE ACCOUNT</Link> | 
                <Link to="/login">SIGN IN</Link>
                        </p>
                </div>
            </form>
        </div>
        </div>
      )
    }
   }
   export default RightComponent;