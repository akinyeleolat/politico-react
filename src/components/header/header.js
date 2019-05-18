import React,{Component} from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import './header.scss'
class Header extends Component{
    render(){
      return (
        <div className='header'>
        <div className="container">
            <div id="branding">
                <h1><img src="img/thumb1.png" width="30px"></img><span className="highlight">Politico</span> </h1>
            </div>
            <HashRouter>
            <nav>
                <ul>
                    <li><i className="fas fa-home"></i><NavLink to="/login">Login</NavLink></li>
                    <li><i className="fas fa-plus-circle"></i><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
            </nav>
            </HashRouter>
        </div>
        </div>
      )
    }
   }
   export default Header;