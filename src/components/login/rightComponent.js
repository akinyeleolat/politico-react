import React,{Component} from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
class RightComponent extends Component{
    render(){
      return (
        <div id="right">
                <div className="pageform">
                <form id="loginForm">
                <img src="./img/thumb2.jpg" width="100px"></img>
                <h1>Sign in to Politico</h1>
                <p><input type="email" id="email" placeholder="Email" required></input></p>
                <p><input type="password" id="password" placeholder="Password" required></input></p>
                <p><input type="submit" id="loginBtn" value="Login" className="button_1"></input></p>
                <p id="responseMsg"></p>
                <HashRouter>
                <div>
                <p className="alignTxtRight">
                <NavLink to="/"><i className="fas fa-home"></i> HOME</NavLink> | 
                <NavLink to="/signup">CREATE ACCOUNT</NavLink> | 
                <NavLink to="/forgotpassword">Forgot
                            Password</NavLink>
                        </p>
                </div>
                </HashRouter>
            </form>
        </div>
        </div>
      )
    }
   }
   export default RightComponent;