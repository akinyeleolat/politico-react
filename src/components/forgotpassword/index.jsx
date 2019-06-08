import React,{Component} from 'react';
import LeftComponent from '../leftComponent';
import passwordLeftItem from '../login/loginLeftItem';
import RightComponent from './rightComponent';
import './index.css';
class ForgotPasswordComponent extends Component{
  constructor(){
    super()
    this.state = {
        passwordLeftItem,
    }
}
    render(){
      return (
        <div className="wallpaper">
        <main className="content">
        <div className="container" id="wrap">
        <LeftComponent item={this.state.passwordLeftItem}/>
        <RightComponent/>
        </div>
        </main>
        </div>
      )
    }
   }
   export default ForgotPasswordComponent;