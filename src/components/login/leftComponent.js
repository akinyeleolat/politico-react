import React,{Component} from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
class LeftComponent extends Component{
    render(){
      return (
        <div id="left">
        <HashRouter>
            <div className="pageform">
            <h1>Hello Friend!</h1>
                    Politico is an online voting app which enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.
                    <p><NavLink to="/signup"><button className="button_2">Sign Up</button></NavLink></p>
            </div>
            </HashRouter>
        </div>
      )
    }
   }
   export default LeftComponent;