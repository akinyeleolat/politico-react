import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class RightComponent extends Component{
    render(){
      return (
        <div id="right">
                <div className="pageform">
                <form id="loginForm">
                <img src="./img/thumb2.jpg" width="100px"/>
                <h1>Sign in to Politico</h1>
                <p><input type="email" id="email" placeholder="Email" required/></p>
                <p><input type="password" id="password" placeholder="Password" required/></p>
                <p><input type="submit" id="loginBtn" value="Login" className="button_1"/></p>
                <p id="responseMsg"></p>
                <div>
                <p className="alignTxtRight">
                <Link to="/"><i className="fas fa-home"></i> HOME</Link> | 
                <Link to="/signup">CREATE ACCOUNT</Link> | 
                <Link to="/forgotpassword">Forgot
                            Password</Link>
                        </p>
                </div>
            </form>
        </div>
        </div>
      )
    }
   }
   export default RightComponent;