import React,{Component} from 'react';
import LeftComponent from '../leftComponent';
import RightComponent from './rightComponent';
import signUpLeftItem from './signUpLeftItem';
import './signup.css';
class SignUpComponent extends Component{
  constructor(){
    super()
    this.state = {
        signUpLeftItem,
    }
}
    render(){
      return (
        <div className="wallpaper">
        <main className="content">
        <div className="container" id="wrap">
        <LeftComponent item={this.state.signUpLeftItem}/>
        <RightComponent/>
        </div>
        </main>
        </div>
      )
    }
   }
   export default SignUpComponent;