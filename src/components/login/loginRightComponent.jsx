import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';


class SignUpRightComponent extends Component{
    render(){
      return (
        <div>
        <h1>Sign in to Politico</h1>
        <LoginForm/>
        <p className="alignTxtRight">
        <Link to="/"><i className="fas fa-home"></i> HOME</Link> | 
        <Link to="/signup">CREATE ACCOUNT</Link> | 
        <Link to="/forgotpassword">FORGOT PASSWORD</Link>
        </p>
        </div>
      )
    }
   }
   export default SignUpRightComponent;