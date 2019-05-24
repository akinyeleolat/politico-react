import React,{Component} from 'react';
import LeftComponent from './leftComponent';
import RightComponent from './rightComponent';
import './index.scss';
class ForgotPasswordComponent extends Component{
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
   export default ForgotPasswordComponent;