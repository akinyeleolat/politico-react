import React,{Component} from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
class LeftComponent extends Component{
    render(){
      return (
        <div id="left">
        <HashRouter>
        <div className="pageform">
            <h1>Welcome Back!</h1>
                    Kindly sign in with your info to continue
                    <p><NavLink to="/login"><button className="button_2">Sign In</button></NavLink></p>
            </div>
            </HashRouter>
        </div>
      )
    }
   }
   export default LeftComponent;