import React, { Component } from 'react';
import ImageUpload from '../uploadImage';

class SignUpForm extends Component {
    render() {
        return (
         <div>  
         <form id="signUpForm">
            <ImageUpload/>
            <p><input type="text" id="lastname" placeholder="Last Name" required/><input type="text" id="firstname" placeholder="First Name" required/></p>
            <p><input type="tel" id="phonenumber"placeholder="+234-phonenumber" required/><input type="email" id="email" placeholder="Email" required/></p>
            <p><input type="password" id="password" placeholder="Password" required/><input type="password" id="confirm_password" placeholder="Confirm Password" required/></p>
            <div id="responseMessage"></div>
            <p><input type="submit" value="Sign Up" className="button_1"/></p>
            <div>
            </div>
        </form>
        </div>  
        )
    }
}
export default SignUpForm;
