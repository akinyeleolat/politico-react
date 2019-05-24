import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './header.scss'
class Header extends Component{
    render(){
      return (
        <div className='header'>
        <div className="container">
            <div id="branding">
                <h1><img src="img/thumb1.png" width="30px"></img><span className="highlight">Politico</span> </h1>
            </div>
            <nav>
                <ul>
                    <li><i className="fas fa-home"></i><Link to="/login">Login</Link></li>
                    <li><i className="fas fa-plus-circle"></i><Link to="/signup">Sign Up</Link></li>
                    </ul>
            </nav>
        </div>
        </div>
      )
    }
   }
   export default Header;