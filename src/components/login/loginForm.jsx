import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    onChange (e){
        this.setState({[e.target.name]: e.target.value})
       }
    onSubmit(e){
         e.preventDefault();
         // eslint-disable-next-line no-console
         console.log(this.state)
     }
    render() {
        return (
         <div>  
         <form onSubmit={this.onSubmit}>
            <p><input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required/></p>
            <p><input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required/></p>
            <p><input type="submit" id="loginBtn" value="Login" className="button_1"/></p>
            <p id="responseMsg"></p>
        </form>
        </div>  
        )
    }
}
export default LoginForm;
