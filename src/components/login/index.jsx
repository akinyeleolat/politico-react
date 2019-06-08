import React,{Component} from 'react';
import LeftComponent from '../leftComponent';
import loginLeftItem from './loginLeftItem';
import RightComponent from './rightComponent';
import './login.css';
class LoginComponent extends Component{
  constructor(){
    super()
    this.state = {
        loginLeftItem,
    }
}
    render(){
      return (
        <div className="wallpaper">
        <main className="content">
        <div className="container" id="wrap">
        <LeftComponent item={this.state.loginLeftItem}/>
        <RightComponent/>
        </div>
        </main>
        </div>
      )
    }
   }
   export default LoginComponent;