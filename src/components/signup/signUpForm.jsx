import React, { Component } from 'react';
import ImageUpload from '../uploadImage';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      phonenumber: '',
      email: '',
      password: '',
      confirm_password: '',
      imageUrl: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  onChange (e){
   this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state)
}
  setUrl(url){
    this.setState({ imageUrl: url })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ImageUpload getUrl={this.setUrl} />
          <p>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" required />
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" required />
          </p>
          <p>
            <input type="tel" name="phonenumber" value={this.state.phonenumber} onChange={this.onChange} placeholder="+234-phonenumber" required />
            <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required />
          </p>
          <p>
            <input type="password" name="password"  value={this.state.password} onChange={this.onChange} placeholder="Password" required />
            <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} placeholder="Confirm Password" required />
          </p>
          <div id="responseMessage" />
          <p><input type="submit" value="Sign Up" className="button_1" /></p>
          <div />
        </form>
      </div>
    );
  }
}
export default SignUpForm;
