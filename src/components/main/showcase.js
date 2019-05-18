import React,{Component} from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
class Showcase extends Component{
    render(){
      return (
        <div>
        <section id="showcase">
            <div className="container">
                <h1><span className="highlight">e-Voting</span> App</h1>
                <HashRouter>
                <div><p>Politico is an online voting app which enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency. The Online fulcrum for politicians, voters and electoral body.
                </p>
                <p><NavLink to="/signup"><button className="button_2">Get Started</button></NavLink></p></div>
                </HashRouter>
            </div>
        </section>
        </div>
      )
    }
   }
   export default Showcase;
   