import React, { Component } from 'react';

class SignUpForm extends Component {
    render() {
        return (
         <div>  
         <form id="loginForm">
            <p><input type="email" id="email" placeholder="Email" required/></p>
            <p><input type="password" id="password" placeholder="Password" required/></p>
            <p><input type="submit" id="loginBtn" value="Login" className="button_1"/></p>
            <p id="responseMsg"></p>
        </form>
        </div>  
        )
    }
}
export default SignUpForm;