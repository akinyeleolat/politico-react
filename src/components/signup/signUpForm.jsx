import React, { Component } from 'react';
import ImageUpload from '../uploadImage';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import FlashMessagesList from './../../flash/flashMessagesList';
import ValidateInput from './../../validations/signup';

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
      passporturl: '',
      errors:{},
      isLoading: false,
      invalid: false,
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.isValid = this.isValid.bind(this);
  }
 
  onChange (e){
   this.setState({[e.target.name]: e.target.value})
  }

  
  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
       this.setState({errors:{}, isLoading: true})
       this.props.userSignUpRequest(this.state)
       .then(
           () => { 
                 this.setState({ redirect: true })
           },
           (error) => {
             this.setState({ errors: error.response.data, isLoading: false });
             const { errors } = this.state;
             const displayServerError = errors.error;
             this.props.addFlashMessage({
               type: 'error',
               text: `${displayServerError}`
             });
           }
           
           );
    }
}
  setUrl(url){
    this.setState({ passporturl: url })
  }

  isValid(){
    const { errors, isValid }= ValidateInput(this.state);
    if(!isValid){
        this.setState({errors})
    }
    return isValid;
   }

  render() {
    const { errors } = this.state;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
     }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ImageUpload getUrl={this.setUrl} />
          <p>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name"/>
            {errors.lastname && <span className="alerts">{errors.lastname}
      </span>}
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name"/>
            {errors.firstname && <span className="alerts">{errors.firstname}
      </span>}
          </p>
          <p>
            <input type="tel" name="phonenumber" value={this.state.phonenumber} onChange={this.onChange} placeholder="+234-phonenumber"/>
            {errors.phonenumber && <span className="alerts">{errors.phonenumber}
      </span>}

            <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"/>
            {errors.email && <span className="alerts">{errors.email}
      </span>}
          </p>
          <p>
            <input type="password" name="password"  value={this.state.password} onChange={this.onChange} placeholder="Password"/>
            {errors.password && <span className="alerts">{errors.password}
      </span>}

            <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} placeholder="Confirm Password"/>
            {errors.confirm_password && <span className="alerts">{errors.confirm_password}
      </span>}<br/>
      {errors.passporturl && <span className="alerts">{errors.passporturl}
      </span>}<br/>
          </p>
          <p><input type="submit" value="Sign Up" disabled={this.state.isLoading || this.state.invalid} className="button_1" /></p>
          <div />
        </form>
        <FlashMessagesList/>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage : PropTypes.func.isRequired
};


export default SignUpForm;
