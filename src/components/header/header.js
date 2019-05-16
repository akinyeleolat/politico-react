import React,{Component} from 'react';
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
                    <li><i className="fas fa-home"></i><a href="login.html"> Login</a></li>
                    <li><i className="fas fa-plus-circle"></i><a href="signup.html"> Sign Up</a></li>
                    </ul>
            </nav>
        </div>
        </div>
      )
    }
   };
   export default Header;