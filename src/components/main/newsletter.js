import React,{Component} from 'react';
class Newsletter extends Component{
    render(){
      return (
        <section id="newsletter">
            <div className="container">
                <h1>Get Updates</h1>
                <form>
                    <input type="email" placeholder="Enter Email" />
                    <button type="submit" className="button_1">Subscribe</button>
                </form>
            </div>
        </section>
      )
    }
   }
   export default Newsletter;
   