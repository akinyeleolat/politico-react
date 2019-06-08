import React,{Component} from 'react';
import { Link } from 'react-router-dom';


class RightComponent extends Component{
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
  
    document.body.appendChild(script);
  }
  scriptLoaded() {
    const widgetOpener = document.getElementById('upload_widget_opener');
    let imageLink;
   cloudinary.applyUploadWidget(widgetOpener,{ 
  cloudName: 'akinyeleolat',
  uploadPreset: 'politico',
  cropping: true,
  folder: 'politico'
}, (error, result) => {
  if (result && result.event === 'success') {
    /*Get image Url*/
    imageLink = result.info.url
    return imageLink
  }
})
  }
    render(){
      return (
        <div id="right">
                <div className="pageform">
                <form id="loginForm">
                <img src="./src/img/thumb2.jpg" width="100px"></img>
                <h1>Create Account</h1>
                <p className="alignTxtRight"><a href="#" id="upload_widget_opener"><button className="button_3">Upload Passport</button></a></p>
                <p><input type="text" id="lastname" placeholder="Last Name" required/><input type="text" id="firstname" placeholder="First Name" required/></p>
                <p><input type="tel" id="phonenumber"placeholder="+234-phonenumber" required/><input type="email" id="email" placeholder="Email" required/></p>
                <p><input type="password" id="password" placeholder="Password" required/><input type="password" id="confirm_password" placeholder="Confirm Password" required/></p>
                <div id="responseMessage"></div>
                <p><input type="submit" value="Sign Up" className="button_1"/></p>
                <div>
                <p>Existing User! <Link to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
        </div>
      )
    }
   }
   export default RightComponent;