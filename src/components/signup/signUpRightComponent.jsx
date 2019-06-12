import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';


class SignUpRightComponent extends Component{
    render(){
      return (
        <div>
          <h1>Create Account</h1>
          <SignUpForm/>
          <p>Existing User! <Link to="/login">Sign In</Link></p>
        </div>
      )
    }
   }
   export default SignUpRightComponent;