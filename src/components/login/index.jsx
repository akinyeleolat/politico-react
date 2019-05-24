import React,{Component} from 'react';
import LeftComponent from './leftComponent';
import RightComponent from './rightComponent';
import './login.scss';
class LoginComponent extends Component{
    render(){
      return (
        <div className="wallpaper">
        <main className="content">
        <div className="container" id="wrap">
        <LeftComponent/>
        <RightComponent/>
        </div>
        </main>
        </div>
      )
    }
   }
   export default LoginComponent;